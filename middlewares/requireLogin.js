// called next to indicate it is going to be passed on to other middle wares before request is handled
module.exports = (req, res, next) => {
  if (!user) {
    return res.status(401).send({ error: "User must be logged in!" });
  }

  next();
};
