const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connection = mongoose.createConnection('mongodb+srv://dimmithra:User--1234@cluster0.cdtyahy.mongodb.net/?retryWrites=true&w=majority').on('open',()=>{
    console.log('Mongo DB Connected');
}).on('error',()=>{
    console.log('Mongo db connecttion error');
})

module.exports = connection;
