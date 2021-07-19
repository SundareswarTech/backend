const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RequestSchema = new mongoose.Schema({
    user:{
        type : String
    },
    dashboard:{
        type : String
    },
    role:{
        type : String,
        enum : ["user" , "admin"]
    },
    isapproved:{
        type : Boolean
    },
    approvedby:{
        type : String
    },
    isDecided:{
        type : String
    }
});




module.exports = mongoose.model('Request', RequestSchema);