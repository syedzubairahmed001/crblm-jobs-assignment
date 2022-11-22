import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String
})

module.exports = mongoose.model('User', UserSchema)
