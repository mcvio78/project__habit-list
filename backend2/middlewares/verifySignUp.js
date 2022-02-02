const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

checkEmailValidity = (req, res, next) => {
  if (!emailRegexp.test(req.email)) {
    res.status(409).send({ message: 'Failed! Email is not a valid email!' });
  }

  next();
};

checkDuplicateUsernameOrEmail = (req, res, next) => {
  const { username, email } = req.body;

  User.findOne({
    username: username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(409).send({ message: 'Failed! Username is already in use!' });
      return;
    }

    User.findOne({
      email: email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(409).send({ message: 'Failed! Email is already in use!' });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  const { roles } = req.body;

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${roles[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkEmailValidity,
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
