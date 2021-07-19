const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DO = new Schema({
    dashboard:{
        type: String,
        required : true
    },
    type:{
        type: String,
        required : true
    },
    title:{
        type: String,
        required : true
    },
    description:{
        type: String
    },
    source:{
        type: String,
    },
    api:{
        type: String
    },
    query:{
        type: String
    },
    height:{
        type: String
    },
    colour:{
        type: String
    },
    data:{
        type: String
    }

});


const DashboardObject = mongoose.model('DashboardObject', DO);

module.exports = DashboardObject;