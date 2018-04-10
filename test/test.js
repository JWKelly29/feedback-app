var chai = require("chai");
var mongoose = require("mongoose");
var chaiHttp = require("chai-http");
var app = require("../index"); // my express app serverc
var should = chai.should();
var testUtils = require("./test-utils");
var sinon = require("sinon");

var request = require("request");

chai.use(chaiHttp);

describe("API Tests", function() {
  // before(function() {
  //   mongoose.connect();
  // });
  //
  beforeEach(function(done) {
    sinon.stub(request, "get").yields(
      undefined,
      {},
      JSON.stringify({
        user: {
          credits: 0,
          _id: "5acd0f5a96f17c1263f4d76a",
          googleID: "101154238693901585161",
          __v: 0
        }
      })
    );
    done();
  });
  //
  afterEach(function() {
    request.get.restore();
  });
  //
  // after(function() {
  //   mongoose.connection.close();
  // });

  // requireLogin = function() {
  //   return;
  // };

  describe("AUTH", function() {
    it("should redirect to google authorization page", done => {
      chai
        .request(app)
        .get("/auth/google")
        .end((err, res) => {
          res.redirects[0].should.contain(
            "https://accounts.google.com/o/oauth2/v2/auth"
          ) && res.redirects[0].should.contain("auth%2Fgoogle%2Fcallback");
          done();
        });
    });
  });
});
