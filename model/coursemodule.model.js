// db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declaring collection schema property and names

let CourseModule = new Schema(
    {
        // schema property: values
        courseid: { type: Number },
        coursemodules: {
            type: Array
        }
    },
    {
        collection: 'coursemodule'
    }
);

module.exports = mongoose.model('CourseModule', CourseModule);
