<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>xkcd cacher | PHP Backend</title>
</head>
<body>
    <h1>xkcd cacher | PHP Backend</h1>
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

    <p>Want to see the actual frontend that can render cached comics? Go to <a href="http://localhost:3000">http://localhost/3000</a></p>
</body>
</html>


