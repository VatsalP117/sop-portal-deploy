const userMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("'/");
};

const studentMiddleware = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type === "student") {
    return next();
  }
  return res.redirect("/");
};

const facultyMiddleware = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type === "faculty") {
    return next();
  }
  return res.redirect("/");
};

module.exports = { userMiddleware, studentMiddleware, facultyMiddleware };
