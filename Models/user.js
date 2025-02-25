const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  dob:{
    type:String,
    required:true
  },
  accountType:{
    type:String,
    required:true
  }

},{timestamps:true})

const User = mongoose.model("BloodBank",userSchema)

module.exports = User
