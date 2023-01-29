import mongoose, { Model } from "mongoose"
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    email:String,
    password:String
  })

userSchema.methods.generateHash = function(password:string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
const User = mongoose.models.users || mongoose.model("users",userSchema)
export { User }
