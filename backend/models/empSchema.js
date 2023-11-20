const mongoose = require('mongoose');
const validator = require("validator");
const moment = require("moment");

//schema

const empSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error("Please type valid Email");
            }
        },
    },
    department:{
            type: String,
            required: true
    },

    date_of_joining:{
            type: String,
            required: true
    },

    status:{
            type: String,
            enum:["active", "in-active"],
            default: "active",
            required: true
        }
    }
    

);

const employees = new mongoose.model("Employees", empSchema);
module.exports = employees;