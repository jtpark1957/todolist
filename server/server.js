const express = require("express");
const app = express();
const api = require('./routes/index');
const api2 = require('./routes/index2');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
app.use('/api2', api2);

const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(`Listening on port ${port}`));