
require("dotenv").config();

const express = require('express');
const axios = require('axios');
const app = express();
require("./db/connectdb");
const cors = require('cors');


const router = require('./routes/router');

const PORT= 8000;



app.use(cors());
app.use(express.json())
app.use(router);



app.get("/",(req,resp)=>{
    resp.status(200);
    resp.send("hello there");
})

//server ---------------------------------
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

//------------------------------------------------