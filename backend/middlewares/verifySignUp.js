const Yup = require('yup');

const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

const checkEmailValidity = async (req, res, next) => {
  const { email } = req.body;

  try {
    await Yup.string()
    .required('Email is required')
    .email()
    .label('Email')
    .validate(email);
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
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
