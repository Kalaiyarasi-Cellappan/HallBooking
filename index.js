const express = require("express");
const mongo = require('./shared/connect');
const employeeRouter = require('./routes/rooms');


const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();

app.use('/room', employeeRouter);
app.listen(3000);