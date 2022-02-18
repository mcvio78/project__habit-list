const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;
const Role = db.role;

verifyToken = async (req, res, next) => {
  try {
    if (req.headers['x-access-token']) {
      const token = req.headers['x-access-token'].split(' ')[1];

      if (token) {
        const payload = await jwt.verify(token, config.secret);

        if (payload) {
          req.user = payload;
          next();
        } else {
          res.status(400).send({ message: 'token verification failed' });
        }
      } else {
        res.status(400).send({ message: 'malformed auth header' });
      }
    } else {
      return res.status(403).send({ message: 'No token provided!' });
    }
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized!' });
  }
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next();
        return;
      }
    }
    res.status(403).send({ message: 'Require Admin Role!' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'moderator') {
        next();
        return;
      }
    }
    res.status(403).send({ message: 'Require Moderator Role!' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};
module.exports = authJwt;
