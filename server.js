const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


require('dotenv').config();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected to db successfully");
})

const port = process.env.port || 5000;

const DORouter = require('./routes/DashboardObject');
const UserRouter = require('./routes/UserRoute');
const DashRouter = require('./routes/Dashboard');
const RequestRouter = require('./routes/Request');

app.use('/do', DORouter);
app.use('/user', UserRouter);
app.use('/dashboard', DashRouter);
app.use('/request',RequestRouter);


app.listen(port, ()=>{
    console.log("App is running")
})