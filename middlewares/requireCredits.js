module.exports = (req, res, next) => {
  console.log(req.user.credits);
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Insufficient number of credits!" });
  }

  next();
};
