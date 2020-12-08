/*const mongoose = require('mongoose')
const crypto = require("crypto")//encryption
const { timeStamp } = require('console')
const { use } = require('../routes/auth.route')

//user schema
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    name:{
        type: String,
        trim: true,
        required: true
    },
    hashed_password:{
        type: String,
        required: true
    },
    salt: String,
    role:{
        type: String,
        default: 'Normal'
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }
},{timeStamp: true})

//virtual password
userSchema.virtual('password')
.set(function(password){
    this.password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
    
})
.get(function(){
    return this.password
})


userSchema.methods = {
    //generate salt
    makeSalt: function () {
        return Math.round(new Date().valueOf()*Math.random())+""
    },
    //password encrypt
    encryptPassword: function(password){
        if(!password) return ""
        try{
            return crypto
            .createHmac('sha1',this.salt)
            .update(password)
            .digest("hex")

        }catch(err){
            return ''
        }
    },
    //compare password
    authenticate:function(plainPassword){
        console.log(this.encryptPassword(plainPassword))
        console.log(hashed_password)
        return this.encryptPassword(plainPassword) === this.hashed_password
    }
}


module.exports = mongoose.model('User',userSchema)*/

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
