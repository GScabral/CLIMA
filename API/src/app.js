const express=require("express");
const cookiesPerser = require('cookie-parser');
const bodyParser= require("body-parser");
const morgan = require('morgan');
const routes= require('./routes/index.js')
const cors = require('cors')


require("./db.js");

const server= express();


server.name = "API";

server.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
server.use(bodyParser.json({limit:'50mb'}));
server.use(cookiesPerser());
server.use(morgan('dev'));
server.use(cors());

server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  server.use("/",routes);


  server.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || err;
    console.error(err);
    res.status(status).send(message);
  })


  module.exports =server;