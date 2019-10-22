# xkcd-cacher

## Task

```
Use PHP to
    Fetch data from a public api
    Store data in a mysql or postgresql database

You can choose any public api you like. An example is http://api.krisinformation.se/

If you feel you have time
Write a node application that retrieves the data that was stored in the database and present it in a suitable way.

Source code should be placed in a Github repository.
```

## Solution: xkcd cacher

> with (quick) Docker setup to allow modern development/deployment workflow

1. Visit `http://localhost/xkcd.php?num=1934` to get the xkcd with `num` as JSON. See the status `message` to know where data is originating from, or if there were any errors.
2. This will either return a cached response from the local Postgres instance - or fetch directly from the xkcd API.
3. Try changing the `?num` query param to your favorite comic!
4. Visit `http://localhost` for further instructions and links.
5. When you've cached a few comics, go to `http://localhost:3000` to see them rendered using data from PostgreSQL.

---

## Credits:

To get up and running quickly, this solution is based on https://github.com/lvthillo/docker-php-postgres/

I figured that since I'm no Docker expert (yet), I should focus on what I know: PHP and Node.js.

For the Node.js + Postgres setup, I used parts of https://github.com/MichalZalecki/docker-compose-node-postgres and modified it to fit with my project.

## Final notes:

Except for some struggles with setting up the Docker image for `php-app`, I'm pretty happy with the end result.

It would have been really nice to get `XDebug`, `Composer` and `GuzzleHttp` working with the `php-app` Docker image - but those could always be added later on if needed. The most important thing is that the project goals were fulfilled, and in a reasonable time once I finally got time to work on the project.

The project config with two files for secret variables - `/node-app/.env` and `env` - is not optimal. But it works for now, and could always be refactored for a project that should be deployed to production.

## Time used

1. I spent about ~1h setting up the foundation for the docker-compose environment
2. Then ~1h setting up PHP and trying to add `XDebug`, `Composer` and `GuzzleHttp`, but eventually giving up (for this time).
3. Then ~2h developing the PHP backend to fetch & cache xkcd comics - and documenting the project, adding some structure and basic error handling. This took some extra time due to the lack of XDebug, and having to rely on slow logging debugging.
4. Then ~2h to develop the Node.js frontend - all the way from fresh Docker image to completed module. This was by far the easiest, since JS is so much easier to work with.
5. Finally ~30 min to analyze the solution and write these ideas for improvents.

---

## Setup instuctions

First, make sure `docker` and `docker-compose` are installed. Then run the following to install dependencies and create a local environment.

```
$ docker-compose up -d
```

Access PHP app on http://localhost to get started.

## Optional:

Visit http://localhost:5050 to inspect PostgreSQL with pgadmin.
Default credentials are:

-   username: pgadmin@mail.com
-   password: mypassword

Add a connection:

<img width="300" alt="screen shot 2017-08-17 at 19 42 55" src="https://user-images.githubusercontent.com/14105387/29425677-6bbfbf06-8384-11e7-8734-7c27c6b70eec.png">

Check the data:

<img width="1435" alt="screen shot 2017-08-17 at 19 35 20" src="https://user-images.githubusercontent.com/14105387/29425357-432aa124-8383-11e7-9bcf-a4b10234be22.png">

The docker-compose.yaml is very flexible. By editing the enviroment variables inside the file you can define the following:

-   POSTGRES_USER (default = dev)
-   POSTGRES_PASSWORD (default = secret)
-   POSTGRES_DB (default = db)
-   DEFAULT_USER (default = pgadmin@mail.com)
-   DEFAULT_PASSWORD (default = mypassword)
