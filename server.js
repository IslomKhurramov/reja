console.log("Web serveni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1
app.use(express.static("public")); //faqat public folderni userla chromedan koroladi
app.use(express.json()); //json formatdagi datani bizga object holatga ugirib beradi
app.use(express.urlencoded({ extended: true })); //buni yozmasak html formdan yozilgan codeni qabul qmaydi ignore qiladi serverga kiritmaydi

//2session

//3 bunda backenda frontend yasaymiz
app.set("views", "views");
app.set("views engine", "ejs"); //view engine ejs ekanligini korsitib beryapmiz

//4 routerlarga muljallangan
app.get("/", function (req, res) {
  res.end("hello world");
});

app.get("/author", function (req, res) {
  res.end("you are in my page");
});

const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
  console.log("The server is running successfully on port:", PORT);
});
