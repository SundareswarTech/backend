const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DO = new Schema({
    name:{
        type: String,
        required : true,
        unique: true
    },
    description:{
        type: String
    },
    admins:{
        type: []
    },
    users:{
        type: []
    }
});


const DashboardMenu = mongoose.model('DashboardObj', DO);

module.exports = DashboardMenu;