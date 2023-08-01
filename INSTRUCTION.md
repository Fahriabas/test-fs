## INSTALATION INSTRUCTION 

To Running Server

`cd server-side`

`npm install`

`npx sequelize db:create`

`npx sequelize db:migrate`

`npx sequelize db:seed:all`

`npx nodemon app`


To Running client

`cd client-side`

`npm install`

`npm run dev`



## Routes


list of user routes:

| Route               | HTTP   | Description                |
| ------------------- | ------ | -------------------------- |
| /register           | POST   | Register new user          |
| /login              | POST   | Login user                 |
| /products           | GET    | List Of Product            |
| /products/id        | GET    | detail user                |


**!NOTE:**

If you found error :

`if create doesn't work on the client it's usually a side effect of seeding data,`

you can
create continues until the amount of data

