var express = require("express");
var app = express();
var path = require("path");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "../../index.html"));
});

const staticFiles = express.static(path.join(__dirname, "../client/build"));
app.use(staticFiles);
app.use("/app", express.static(path.join(__dirname, "../client/build")));
console.log(path.join(__dirname, "../client/build"));

app.set("port", process.env.PORT || 4001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
