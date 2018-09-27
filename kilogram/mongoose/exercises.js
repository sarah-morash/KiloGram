import mongoose from "mongoose";

var Schema = mongoose.Schema;
// create a schema
var exerciseSchema = new Schema(
  {
    name: String
  },
  { collection: "Exercises" }
);
// we need to create a model using it
var Exercises = mongoose.model("Exercises", exerciseSchema);
export default Exercises;
