// db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declaring collection schema property and names

let Course = new Schema(
  {
    // schema property: values
    courseid: { type: Number },
    title: { type: String },
    price: { type: Number },
    duration: { type: String },
    batchsize: { type: Number },
    package: { type: String },
    coursetype: { type: String },
    syllabus: { type: String }
  },
  {
    collection: 'course'
  }
);

module.exports = mongoose.model('Course', Course);
