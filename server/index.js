const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
console.log("Running on port:  " + PORT);

app.listen(PORT);
