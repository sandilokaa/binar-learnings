# Car Management Dashboard

Car Management Dashboard merupakan Challenge yang diberikan oleh pihak Binar Academy.

Untuk melengkapi kebutuhan pembuatan challenge bisa dilihat link di bawah ini :

- Bootstrap Versi 4.6 `https://getbootstrap.com/docs/4.6/getting-started/introduction/`
- Express.Js `https://expressjs.com/`
- Sequelize `https://sequelize.org/`
- Postgresql `https://www.postgresql.org/docs/`
- DBDiagram `https://dbdiagram.io/`

## Entity Relationship Diagram

Berikut Entity Relationship Diagram menggunakan (https://dbdiagram.io/)

![diagram](./views/assets/img/cars%20diagram.png)


## Endpoint REST API

Berikut endpoint REST API serta contoh request body dan response body:


## Get List Car

- Pada postman atur method menjadi get dan isi url nya

**Contoh:**
```
http://localhost:2000/getAllCars
```

- Dan terakhir klik send untuk create data, data dikembalikan dalam bentuk HTML.


## Get Car By Id

- Pada postman atur method menjadi get dan isi url nya

**Contoh:**
```
http://localhost:2000/getById/:id
```

- Dan terakhir klik send untuk create data, data dikembalikan dalam bentuk HTML.


## Create Data

- Pada postman atur method menjadi post dan isi url nya

**Contoh:**
```
http://localhost:2000/add-car/create
```

- Setelah itu pilih body, klik radio button row lalu pilih format menjadi JSON:

**Contoh:**
```
{
    "name": "Honda Mobilio",
    "price": 250000,
    "size": "medium",
    "image": "https://resources.compressor-express.com/images/brands2/honda-mobilio.png"
}
```
- Dan terakhir klik send untuk create data, data dikembalikan dalam bentuk HTML.


## Edit Data

- Pada postman atur method menjadi post dan isi url nya

**Contoh:**
```
http://localhost:2000/update-car/update/:id
```

- Setelah itu pilih body, klik radio button row lalu pilih format menjadi JSON:

**Contoh:**
```
{
    "name": "Honda Mobilio 2018",
    "price": 250000,
    "size": "medium",
    "image": "https://resources.compressor-express.com/images/brands2/honda-mobilio.png"
}
```
- Dan terakhir klik send untuk create data, data dikembalikan dalam bentuk HTML.


## Delete Data

- Pada postman atur method menjadi post dan isi url nya

**Contoh:**
```
http://localhost:2000/delete-car/:id
```

- Dan terakhir klik send untuk create data, data dikembalikan dalam bentuk HTML.