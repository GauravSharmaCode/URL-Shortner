const express = require('express')

const {connect} = require('./connection');
const URLRoute = require('./routes/url');

const app = express();

require('dotenv').config();

const env = process.env;

const PORT = env.PORT;
// const URI = env.MONGO_URI;

connect();

app.use(express.json());

app.use('/url', URLRoute);

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });
