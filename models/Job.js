const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the schema
const JobSchema = new Schema({
  companyName: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
JobSchema.index({ title: "text" });
//schema.index({'$**': 'text'});  wildcard all fields available for the search

module.exports = Job = mongoose.model("job", JobSchema);
