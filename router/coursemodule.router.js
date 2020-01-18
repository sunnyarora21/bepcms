const express = require('express');
const courseModuleRoute = express.Router();

const CourseModule = require('../model/coursemodule.model');

courseModuleRoute.route('/').get(function(req, res) {
    CourseModule.find(function(err, data) {
        if (err) {
            throw err;
        } else {
            res.json({ output: data });
        }
    });
});

courseModuleRoute.route('/').post(function(req, res) {
    let courseModule = new CourseModule(req.body);

    courseModule
        .save()
        .then(obj => {
            res.status(200).json({ message: 'CourseModule Added Successfully.' });
        })
        .catch(err => {
            console.log(err);
        });
});

courseModuleRoute.route('/:id').get(function (req,res) {
    let id = req.params.id;
    CourseModule.findById({_id: id}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.json({ output: data });
        }
    });
});

courseModuleRoute.route('/sub/:courseid').get(function (req,res) {
    let id = req.params.courseid;
    CourseModule.find({courseid: id}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.json({ output: data });
        }
    });
});

courseModuleRoute.route('/:id').patch(function (req,res) {
    let id = req.params.id;
    CourseModule.findById({_id: id }, function (err, data) {
        if(!data) {
            res.status(400).json({ message: 'No data found'});
        } else {
            data.coursemodules = req.body.coursemodules;
            data.save().then(obj => {
                res.status(200).json({message: 'Successfully updated CourseModule'});
            }).catch(err => {
                res.status(400).json({message: 'Unable to update the courseModule'});
            })
        }
    });
});

courseModuleRoute.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    CourseModule.findByIdAndDelete({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({ message : 'Successfully Deleted the CourseModule '});
        }
    });
});

module.exports = courseModuleRoute;
