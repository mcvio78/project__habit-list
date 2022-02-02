const express = require('express');
const cors = require('cors');

const db = require('./models');
const dbConfig = require('./config/db.config');

const app = express();

const { ALLOWED_ORIGIN } = process.env;
let corsOptions = { origin: ALLOWED_ORIGIN };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/validity.routes')(app);
require('./routes/notFound.routes')(app);

const { SERVER_PORT } = process.env;
const PORT = SERVER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save(err => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

const connectionDB = async () => {
  try {
    await db.mongoose.connect(
      `${dbConfig.PREFIX}${dbConfig.USER}:${dbConfig.PASSWORD}${dbConfig.HOST}/${dbConfig.DB}${dbConfig.OPTIONS}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Successfully connect to MongoDB.');
    initial();
  } catch (err) {
    console.error('Connection error', err);
    process.exit();
  }
};

connectionDB();
