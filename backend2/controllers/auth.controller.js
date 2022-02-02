const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

crateToken = user => {
  return jwt.sign(
    {
      user_id: user._id,
      email: user.email,
      username: user.username,
    },
    config.secret,
    {
      expiresIn: '20000',
      issuer: 'auth-backend',
      subject: 'email',
      audience: 'web-frontend',
    },
  );
};

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email.toLowerCase(),
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            return res.status(500).send({ message: err });
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              return res.status(500).send({ message: err });
            }

            const token = crateToken(user);

            res
              .status(201)
              .json({ token, message: 'User was registered successfully!' });
          });
        },
      );
    } else {
      Role.findOne({ name: 'user' }, (err, role) => {
        if (err) {
          return res.status(500).send({ message: err });
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            return res.status(500).send({ message: err });
          }

          const token = crateToken(user);

          res
            .status(201)
            .json({ token, message: 'User was registered successfully!' });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({ message: err });
      }

      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = crateToken(user);

      res
        .status(201)
        .json({ token, message: 'User was registered successfully!' });
    });
};
