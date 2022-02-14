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
      expiresIn: '2000000',
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

    await user.save(user);

    if (req.body.roles) {
      const roles = await Role.find({ name: { $in: req.body.roles } });
      user.roles = roles.map(role => role._id);
      await user.save;
      const token = crateToken(user);

      res.status(201).json({ token });
    } else {
      const role = await Role.findOne({ name: 'user' });
      user.roles = [role._id];
      await user.save;
      const token = crateToken(user);

      res.status(201);
      res.statusMessage = 'User was registered successfully!';
      res.status(201).send(`bearer ${token}`);
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while registering user.',
    });
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
      res.statusMessage = 'User was authenticated successfully!';
      res.status(201).send(`bearer ${token}`);
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while authenticating user.',
    });
  }
};
