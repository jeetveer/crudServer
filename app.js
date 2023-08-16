const express = require("express");
require("dotenv").config();
const app = express();

require('./db/conn');
const users = require("./models/userSchema");
const router = require('./routes/router');

const port = process.env.PORT || 8003;


app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`server is start port number ${port}`);
})