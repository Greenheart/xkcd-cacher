<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>xkcd cacher</title>
</head>
<body>
    <h1>xkcd cacher</h1>
    <p>Use the links below to cache xkcd comics using Postgres. The first request will fetch from xkcd API, but after that, data is served from Postgres.</p>
    <ul>
        <li>
            <a href="/xkcd.php?num=1934">http://localhost/xkcd.php?num=1934</a>
        </li>
        <li>
            <a href="/xkcd.php?num=1337">http://localhost/xkcd.php?num=1337</a>
        </li>
    </ul>
    <p>And of course, it works with any valid <pre style="display: inline">?num=COMIC_ID</pre></p><br>

    <p>Go to <a href="/xkcd.php?all">http://localhost/xkcd.php?all</a> to get all cached comics as JSON.</p>
</body>
</html>


