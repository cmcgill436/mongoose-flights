require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require("./models/flight");
const { connect, connection } = require("mongoose");
const methodOverride = require("method-override");

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo");
});

const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Middleware running...");
  next();
});

app.use(methodOverride("_method"));
app.use(express.static("public"));

// I.N.D.U.C.E.S
// ==============

app.get("/", (req, res) => {
  res.send("Welcome to the Flight App!");
});

// Index
app.get("/flights", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundFlight = await Flight.find({});
    res.status(200).render("Index", { flights: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New;
app.get("/flights/new", (req, res) => {
  res.render("New");
});

//Update / Put - destination
app.put("/flights/:id/destination", async (req, res) => {
  try {
    console.log(req.body);
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $push: { destination: req.body } },
      { new: true }
    );
    console.log(updatedFlight);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update / PUT;
app.put("/flights/:id", async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    console.log(updatedFlight);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create
app.post("/flights", async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    console.log(newFlight);
    res.redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit
app.get("/flights/:id/edit", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);
    res.render("Edit", {
      flights: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

/// Show
app.get("/flights/:id", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);
    console.log(foundFlight);
    console.log(foundFlight._id);
    res.render("Show", {
      flights: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
