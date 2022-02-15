const Yup = require('yup');

const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

const checkEmailValidity = async (req, res, next) => {
  try {
    const { email } = req.body;

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

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      res.status(409).send({ message: 'Failed! Username is already in use!' });
      return;
    }

    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      res.status(409).send({ message: 'Failed! Email is already in use!' });
      return;
    }

    next();
  } catch (err) {
    res.status(500).send({
      message:
        err.message ||
        'Some error occurred while checking username or email validity.',
    });
  }
};

checkRolesExisted = (req, res, next) => {
  try {
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
  } catch (err) {
    res
      .status(500)
      .send({
        message: err.message || 'Some error occurred while checking if the role exists.',
      });
  }
};

const verifySignUp = {
  checkEmailValidity,
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
