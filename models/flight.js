const { Schema, model } = require("mongoose");
const destinationSchema = require("./destination");

const date = new Date();

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: new Date(date.getFullYear() + 1, date.getMonth(), date.getDate()),
  },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
    required: true,
  },
  destination: [destinationSchema],
});

const Flight = model("Flight", flightSchema);

module.exports = Flight;
