const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({ origin: true, credentials: true })); //Use cors to bypass http request obstacles
app.use(express.json({ extended: false }));
app.use("/api/books", require("./routes/api/books.js")); //use books.js file

app.get("/", function(req, res){
  res.send("Hello World");
});
app.listen(8000, function(){
  console.log("Server is running on port 8000");
});
