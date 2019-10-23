<?php

include_once('database.php');

// Try fetching cached xkcd from PostgreSQL
// Then only fetch from real API if it doesn't exist yet
function get_xkcd_if_not_already_cached($xkcd_num) {
    // Since $xkcd_num is set by the query param,
    // we need to use a PDO statement to prevent SQL injections
    global $db;
    $statement = $db->prepare("SELECT * FROM xkcd WHERE num = :num LIMIT 1");
    $statement->execute(array(
        'num' => $xkcd_num
    ));

    $cached_xkcd = $statement->fetchObject();

    if ($cached_xkcd) {
        return array(
            'message' => "Cached xkcd comic {$xkcd_num} from Postgres",
            'data' => $cached_xkcd);
    } else {
        $comic = fetch_xkcd($xkcd_num);

        if ($comic) {
            $result = save_xkcd($comic);
            
            return $result;
        }

        return null;
    }
}

function fetch_xkcd($xkcd_num) {
    // Ideally, we should use GuzzleHttp here, but I didn't get setup with Composer and docker-compose
    // to work properly. So I used this quick solution instead.
    
    try {
        // Use @ to supress warning
        $response = @file_get_contents("https://xkcd.com/{$xkcd_num}/info.0.json");

        // Handle failed requests.
        // This is required since file_get_contents() throws warnings, rather than exceptions.
        if ($response === false) {
            $error = error_get_last();
            echo json_encode(array(
                'message' => "Failed to fetch xkcd comic with num = {$xkcd_num}: " . $error['message']
            ));
            exit;
        }

        $comic = json_decode($response, true);
    } catch (Exception $e) {
        // Handle JSON parsing failures
        echo json_encode(array(
            'message' => "Failed to fetch xkcd comic with num = {$xkcd_num}: " . $e->getMessage()
        ));
        exit;
    }

    return $comic;
}

function save_xkcd($comic) {
    global $db;

    try {
        $statement = $db->prepare("INSERT INTO xkcd(month, num, link, year, news, safe_title, transcript, alt, img, title, day)
        VALUES(:month, :num, :link, :year, :news, :safe_title, :transcript, :alt, :img, :title, :day)");
        
        $success = $statement->execute(array(
            "month" => $comic['month'],
            "num" => $comic['num'],
            "link" => $comic['link'],
            "year" => $comic['year'],
            "news" => $comic['news'],
            "safe_title" => $comic['safe_title'],
            "transcript" => $comic['transcript'],
            "alt" => $comic['alt'],
            "img" => $comic['img'],
            "title" => $comic['title'],
            "day" => $comic['day']
        ));
    } catch (Exception $e) {
        return array(
            'message' => "Failed to save new xkcd for {$comic['num']}: " . $e->getMessage()
        );
    }
    
    return array(
        'message' => "Saved new xkcd {$comic['num']}",
        'data' => $comic
    );
}

function get_all_cached_xkcd() {
    global $db;
    
    $statement = $db->prepare("SELECT * FROM xkcd");
    $statement->execute();
    
    $all_comics = array();
    while ($comic = $statement->fetchObject()) {
        array_push($all_comics, $comic);
    }

    return $all_comics;
}