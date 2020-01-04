const express = require('express');
const courseRoute = express.Router();

const Course = require('../model/course.mode');

courseRoute.route('/').get(function(req, res) {
  Course.find(function(err, data) {
    if (err) {
      throw err;
    } else {
      res.json({ output: data });
    }
  });
});

courseRoute.route('/').post(function(req, res) {
  let course = new Course(req.body);

  course
    .save()
    .then(obj => {
      res.status(200).json({ message: 'Course Added Successfully.' });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = courseRoute;
