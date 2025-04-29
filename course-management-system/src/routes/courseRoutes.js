const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/new', courseController.createCourseForm);
router.post('/', courseController.createCourse);

router.get('/', courseController.listCourses);

router.get('/:id/edit', courseController.editCourseForm);
router.post('/:id', courseController.updateCourse);

router.get('/:id', courseController.showCourse);


router.post('/:id/delete', courseController.deleteCourse);

module.exports = router;