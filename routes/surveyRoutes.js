const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
// using mongoose.model so i'm not requiring in the same file multiple times
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipeints: recipients.split(",").map(email => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: new Date.now()
    });
    survey.save();
  });
};
