const express = require('express');
const app = express();
const courseRoute = require('./course.router');

app.use('/course', courseRoute);

module.exports = app;
