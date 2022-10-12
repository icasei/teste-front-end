require('dotenv').config();
const app = require('express')();
const consign = require('consign');
require('./src/server/mongodb')

consign()
    .then('./src/config/middleware.js')
    .then('./src/controllers')
    .into(app)

app.listen(3001 , () => {
    console.log('backend is running...');
});
