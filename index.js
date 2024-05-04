const express = require('express')
const session = require('express-session');
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
const cors = require('cors');
const path = require('path');
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs/index");

app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true
}));

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mapsRoutes = require('./routes/mapsRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 3000

app.use('/', mapsRoutes);
app.use('/auth', authRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

dbConnection()

app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})

module.exports = app;