const express = require('express');
const RequestRouter = express.Router();
const passport = require('passport');

const JWT = require('jsonwebtoken');

const passportConfig = require('../passport');
const Request = require('../models/Request.Model');


const signToken = userId =>{
    return JWT.sign({
        iss : "Euphoria",
        sub : userId
    }, "Euphoria",{expiresIn : "1h"});
}



RequestRouter.post('/add',(req,res)=>{
    newUser = new Request(req.body);
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message:{msgBody: " Error has occured. ", msgError: true}})
                else        res.status(201).json({message:{msgBody: " Request successfully created! ", msgError: false}})
            })
    })

    RequestRouter.get('/getall',passport.authenticate('jwt',{session:false}),(req,res)=>{
        Request.find()
        .then(dos => res.json(dos))
        .catch(err => res.status(400).json('Error: '+err))
    });
    
    RequestRouter.put('/put/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
        console.log(req.body)
        Request.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json("Updated!"))
        .catch(err => res.status(400).json('Error: '+err))
    });

module.exports = RequestRouter;