const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('./config/database').connect();

const User = require('./model/user');
const auth = require('./middleware/auth');

const app = express();

const { ALLOWED_ORIGIN } = process.env;

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
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h',
      },
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post('/login', (req, res) => {
  // our login logic goes here
  return res.status(200).send('this is a test');
});

app.all('/welcome', auth, (req, res) => {
  res.status(200).send('Welcome 🙌 ');
});

module.exports = app;
