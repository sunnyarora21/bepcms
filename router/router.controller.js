const express = require('express');
const app = express();
const courseRoute = require('./course.router');
const courseModuleRoute = require('./coursemodule.router');
app.use('/course', courseRoute);
app.use('/coursemodule', courseModuleRoute);

module.exports = app;
