const mongoose = require ("mongoose");
const { schema } = require("./User.model");

const Schema = mongoose.Schema;

const teacherSchema = new Schema ({
    firstName: {
    type: String,
    requiredc: "Please Enter First Name : ",
},
lastName:{
    type: String,
    requiredc: "Please Enter First Name : ",
},
phone:{
    type: String,
    requiredc: "Please Enter First Name : ",
},
email:{
    type: String,
    requiredc: "Please Enter First Name : ",
},
dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateUpdated: {
    type: Date,
    default: Date.now(),
  },
})


module.exports = mongoose.model ("Teacher", teacherSchema);