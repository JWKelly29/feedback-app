const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../index.js");

const User = mongoose.model("users");

if (process.env.NODE_ENV != "test") {
  throw "Not running on test enviroment. Please type 'export NODE_ENV=test' to switch to test environment";
}

var assert = require("assert");

beforeEach(function() {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function() {
    console.log("We are connected to test database!");
  });
  return db.dropDatabase(function() {
    console.log("db dropped");
    //mongoose.connection.close(done);
  });
});

describe("User", function() {
  describe("#save()", function() {
    it("should save without error", function(done) {
      var user = new User({ googleID: "hfucydbsibcibshib" });
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
