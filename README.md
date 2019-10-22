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

---

## Credits:

To get up and running quickly, this solution is based on https://github.com/lvthillo/docker-php-postgres/

I figured that since I'm no Docker expert (yet), I should focus on what I know: PHP and Node.js.

---

## Setup instuctions

First, make sure `docker` and `docker-compose` are installed. Then run the following to install dependencies and create local environment.

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
