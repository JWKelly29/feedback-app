// logic for handling what credentials to return
if (process.env.NODE_ENV == "production") {
  // if in production return production keys
  module.exports = require("./prod.js");
} else if (process.env.NODE_ENV == "test") {
  // if running tests return test keys
  module.exports = require("./test.js");
} else {
  // if in dev return dev keys
  module.exports = require("./dev.js");
}
