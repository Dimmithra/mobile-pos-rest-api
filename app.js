
const express = require('express');
const { model } = require('mongoose');
const body_paser = require('body-parser');
const endponits = require('./router/endpoints');

const app = express();

app.use(body_paser.json());

app.use('/',endponits);

module.exports =app;