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

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(email && password && username)) {
      res.status(400).send('All input is required');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email.toLowerCase(),
      password: encryptedPassword,
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

              res.status(201).json({ token });
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
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send('All input is required');
    }

    const user = await User.findOne({ username: username }).populate(
      'roles',
      '-__v',
    );

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = crateToken(user);
      res.status(201).json({ token });
    }
  } catch (err) {
    console.log(err);
  }
};
