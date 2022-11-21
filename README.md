# <p align = "center"> NG TYBE API </p>

<p align="center">
   <img src="https://ng.cash/_nuxt/img/logo-ngcash-branco.88c5860.svg" width="150"/>
</p>

## :computer: Technologies

- TypeScript
- Node.js
- SQL, Postgres
- Prisma

---

## :rocket: Routers

```yml
POST /signup
    - Route to register a new user
    - headers: {}
    - body:
        {
            "username": "loremipsum",
            "password": "Loremipsum12",
        }
```

```yml
POST /signin
    - Route to login
    - headers: {}
    - body:
        {
            "username": "loremipsum",
            "password": "Loremipsum12"
        }
```

```yml
GET /balance (authenticated)
    - Route to view balance
    - headers: { "Authorization": "Bearer $token" }
    - body:
        {
        }
```

```yml
POST /cash-out (authenticated)
    - Route to cash-out
    - headers: { "Authorization": "Bearer $token" }
    - body: {
       "username": "loremipsum"
       "value": 30
    }

```

```yml
GET /transactions (authenticated)
    - Route to list all transaction cash-out and cash-in
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /transactions/filter (authenticated)
    - Route to list all transaction filtering to date and cash in and cash out
    - headers: { "Authorization": "Bearer $token" }
    - body: {},
    - params: {
      "date_transaction": "2022-11-20",
      "cash_type": "in" | "out" to default is "in"
    }
```

---

## 🏁 running the application with docker

```
docker-compose up -d
```

```
app running by default on port 5000 🚀🚀🚀🚀🚀
```
