<?php

include_once('xkcd-helpers.php');

if (isset($_GET['all'])) {
    header('Content-Type: application/json');
   
    echo json_encode(get_all_cached_xkcd());
} else if (isset($_GET['num'])) {
    if (filter_var($_GET['num'], FILTER_VALIDATE_INT)) {
        header('Content-Type: application/json');
        $comic = get_xkcd_if_not_already_cached($_GET['num']);
        
        echo json_encode($comic);
    } else {
        header('Content-Type: text/html');
        echo '<p style="color: red;">The query param <span style="font-family: monospace">?num</span> needs to be an integer.</p>';
        include_once('index.php');
    }
} else {
    header('Content-Type: text/html');

    include_once('index.php');
}