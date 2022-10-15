require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }))

const consign = require('consign');
require('./src/server/mongodb')

consign()
    .then('./src/config/middleware.js')
    .then('./src/routes')
    .into(app)

app.listen(3333 , () => {
    console.log('backend is running...');
});
