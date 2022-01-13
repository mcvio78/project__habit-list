const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('./config/database').connect();

const User = require('./model/user');
const app = express();
const { ALLOWED_ORIGIN } = process.env;
const auth = require('./middleware/auth');

app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  }),
);

// Register
app.post('/register', async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send('All input is required');
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    // noinspection UnnecessaryLocalVariableJS
    const token = jwt.sign(
      {
        user_id: user._id,
        email,
        permissions: ['read', 'write'],
        name: `${first_name}_${last_name}`,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: '20000',
        issuer: 'auth-backend',
        subject: email,
        audience: 'web-frontend',
        notBefore: '3000',
      },
    );

    // return new user
    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post('/login', async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required');
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      // noinspection UnnecessaryLocalVariableJS
      const token = jwt.sign(
        {
          user_id: user._id,
          email: user.email,
          permissions: user.permissions,
          name: user.name,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: '20000',
          issuer: 'auth-backend',
          subject: user.email,
          audience: 'web-frontend',
          notBefore: '3000',
        },
      );
      ``;
      // save user token
      user.token = token;

      // user
      res.status(200).json({ token });
    }
    res.status(400).send('Invalid Credentials');
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

app.post('/tokenValidity', auth, (req, res) => {
  res.status(200).send('Token is valid');
});

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

module.exports = app;
