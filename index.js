const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/user");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// Middleware used on incoming request before they are sent off to request handlers
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV == "production") {
  // Express to serve production assets e.g. main.js or main.css
  // if route comes in that express doesn't understand look in our build directory
  app.use(express.static("client/build"));

  // Express to serve index.html if it doesn't recognise the routes

  // this is route handler to catch any file names express doesnt understand. So
  // first it will look in express route handlers defined above, then in build, if still can't find anything
  // serve index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
console.log("Running on port:  " + PORT);

app.listen(PORT);
