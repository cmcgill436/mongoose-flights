const { Schema, model } = require("mongoose");

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  departs: Date,
});

const Flight = model("Flight", flightSchema);

module.exports = Flight;
