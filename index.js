/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
const dbUri = process.env.DB_URL;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.json());

if (!dbUri) {
  console.log('No database address found in .env file.');
}

mongoose.connect(dbUri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Database connection succesfully created.');
    }
  });

app.use('/api', [patientRoutes]);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
