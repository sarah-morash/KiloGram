import mongoose from "mongoose";

var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    dateCreated: Date
    /*height: Number,
    weight: Number,
    gym: String,
    age: Number*/
  },
  { collection: "Users" }
);
// we need to create a model using it
var Users = mongoose.model("Users", userSchema);
export default Users;
