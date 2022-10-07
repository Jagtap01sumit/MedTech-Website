const express = require("express");
const path = require("path");
const cheerio = require("cheerio");
// const fetch = require("node-fetch");
const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://localhost/contactMedTech");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const app = express();
const port = 80;

// define schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  mesage: String,
});

const contact = mongoose.model("contact", contactSchema);

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());
app.use(express.json());

// PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  // res.status(200).render('index.html', params);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/views/bb", (req, res) => {
  res.sendFile(__dirname + "/views/bb.html");
});
app.get("/views/donateBlood", (req, res) => {
  res.sendFile(__dirname + "/views/donateBlood.html");
});
app.get("/views/hospitalOrder", (req, res) => {
  res.sendFile(__dirname + "/views/hospitalOrder.html");
});
app.get("/views/MCI", (req, res) => {
  res.sendFile(__dirname + "/views/MCI.html");
});
app.get("/views/viewBloodBank", (req, res) => {
  res.sendFile(__dirname + "/views/viewBloodBank.html");
});
app.get("/views/viewDonors", (req, res) => {
  res.sendFile(__dirname + "/views/viewDonors.html");
});
app.get("/views/viewHospital", (req, res) => {
  res.sendFile(__dirname + "/views/viewHospital.html");
});

app.get("/views/bb.html", (req, res) => {
  res.sendFile(__dirname + "/views/bb.html");
});
app.get("/views/donateBlood.html", (req, res) => {
  res.sendFile(__dirname + "/views/donateBlood.html");
});
app.get("/views/hospitalOrder.html", (req, res) => {
  res.sendFile(__dirname + "/views/hospitalOrder.html");
});
app.get("/views/MCI.html", (req, res) => {
  res.sendFile(__dirname + "/views/MCI.html");
});
app.get("/views/viewBloodBank.html", (req, res) => {
  res.sendFile(__dirname + "/views/viewBloodBank.html");
});
app.get("/views/viewDonors.html", (req, res) => {
  res.sendFile(__dirname + "/views/viewDonors.html");
});
app.get("/views/viewHospitalUse.html", (req, res) => {
  res.sendFile(__dirname + "/views/viewHospitalUse.html");
});
app.get("/views/viewHospitalUse", (req, res) => {
  res.sendFile(__dirname + "/views/viewHospitalUse.html");
});

app.post("/scrap", (req, res) => {
  const url = req.body.url;
  console.log(url);
  res.status(200).json({ url: url });
});
// app.get('/contact',(req,res)=>{
//       const params = {};    res.status(200).render("index.html", params);
//  })


app.post('/contact', (req, res) => {
  var myData = new contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database");
    })
    .catch(() => {
      res.status(400).send("Itme not saved");
    });
 
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});