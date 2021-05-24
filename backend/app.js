const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect("mongodb://localhost:27017/bookDB", {useNewUrlParser: true});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/api/books", require("./routes/api/books.js"));

app.get("/", function(req, res){
  res.send("Hello World");
});
app.listen(8000, function(){
  console.log("Server is running on port 8000");
});
