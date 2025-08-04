const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");

function auth(req, res, next) {
  const token = req.cookies.token;

  try {
    const verifyResult = jwt.verify(token, JWT_SECRET);

    //добавляем в запрос пользователя c его email
    req.user = {
      email: verifyResult.email,
    };

    next();
  } catch (e) {
    res.redirect("/login");
  }
}

module.exports = auth;
