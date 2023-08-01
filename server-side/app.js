require('dotenv').config()
const express = require('express')
const Router = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(Router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})