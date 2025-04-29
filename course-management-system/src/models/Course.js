const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    courseStartDate: {
        type: Date,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;