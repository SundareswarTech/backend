const express = require('express');
const dashboardRouter = express.Router();
const passport = require('passport');

const JWT = require('jsonwebtoken');

const passportConfig = require('../passport');

let Dash = require('../models/DatabaseObject.Model');


dashboardRouter.get('/getall/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.find({dashboard: req.params.id})
    .then(dos => res.json(dos))
    .catch(err => res.status(400).json('Error: '+err))
});



dashboardRouter.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const doParam = new Dash(req.body);
    doParam.save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(400).json('Error: '+err))
});


dashboardRouter.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
});

dashboardRouter.get('/find/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.findById(req.params.id)
    .then(dos => res.json(dos))
    .catch(err => res.status(400).json('Error: '+err))
});

dashboardRouter.put('/put/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json("Updated!"))
    .catch(err => res.status(400).json('Error: '+err))
});


module.exports = dashboardRouter;