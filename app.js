
const express = require('express');
const { model } = require('mongoose');
const body_paser = require('body-parser');
const endponits = require('./router/endpoints');

const app = express();

//web configeration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    if (req.method === 'OPTIONS') {
      // Handle preflight requests
      return res.status(200).end();
    }
    // Continue to the next middleware
    next();
  });
//
app.use(body_paser.json());

app.use('/',endponits);

module.exports =app;