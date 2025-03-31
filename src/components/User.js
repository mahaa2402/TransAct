const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNum: { type: String, required: true },
  password: { type: String, required: true },
  applicationNumber: { type: String, unique: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
