const express = require('express');
const dashRouter = express.Router();
const passport = require('passport');

const JWT = require('jsonwebtoken');

const passportConfig = require('../passport');

let Dash = require('../models/Dashboard.Model');


dashRouter.get('/getall',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.find()
    .then(dos => res.json(dos))
    .catch(err => res.status(400).json('Error: '+err))
});



dashRouter.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const doParam = new Dash(req.body);
    doParam.save()
    .then(() => {
      Dash.find().then(
        dos=>res.json(dos))
  })
    .catch(err => {
      res.status(400).json('Error: '+err)
    })
});


dashRouter.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Dash.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
});

dashRouter.put('/updateusers',passport.authenticate('jwt',{session:false}),(req,res)=>{
    let myquery = { name: req.body.name };
    let newvalues = {
    $set: {
      users: req.body.users
    },
  };
    Dash.updateOne(myquery, newvalues)
    .then(() => res.json("Updated!"))
    .catch(err => res.status(400).json('Error: '+err))
});

dashRouter.put('/updateadmins',passport.authenticate('jwt',{session:false}),(req,res)=>{
    let myquery = { name: req.body.name };
    let newvalues = {
    $set: {
      admins: req.body.admins
    },
  };
    Dash.updateOne(myquery, newvalues)
    .then(() => res.json("Updated!"))
    .catch(err => res.status(400).json('Error: '+err))
});



module.exports = dashRouter;