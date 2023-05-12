const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB connect
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//1-Kirish Code :bosqich expressga kirib kelayotgan kodlarimiz yoziladi
app.use(express.static("public"));
app.use(express.json()); //json formatda kirib kelayotgan  datani object holatiga ugirib beradi
app.use(express.urlencoded({ extended: true })); //form request yani HTML formdan yozilgan narsalarni qabul qiladi

//2-SEssion code:bosqichda sesionlarga bogliq narsalar yoziladi

//3-View Code:bosqichda backenda frontend (view) yasaymiz
app.set("views", "views");
app.set("view engine", "ejs");

//4-Routing Code:bosqich routerlarga muljallangan
app.post("/create-item", (req, res) => {
  //post malumotni uzi bn birga olib keladi va databasega yozadi
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  //get databasedan malumotni olish un ishlatiladi
  res.render("reja");
});

module.exports = app;
