const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is neccesary"],
  },
  email: {
    type: String,
    required: [true, "Email id is neccesary"],
    unique: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: [true, "Password is neccesary"],
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Users", userSchema);
