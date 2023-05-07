const express = require("express");
const http = require("http");
const app = express();

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
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
