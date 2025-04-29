exports.createCourse = (req, res) => {
    const { courseName, price, image, duration, courseStartDate } = req.body;
    const newCourse = new Course({ courseName, price, image, duration, courseStartDate });

    newCourse.save()
        .then(() => res.redirect('/courses'))
        .catch(err => res.status(400).send(err));
};

exports.getAllCourses = (req, res) => {
    Course.find()
        .then(courses => res.render('courses/list', { courses }))
        .catch(err => res.status(500).send(err));
};

exports.getCourseById = (req, res) => {
    Course.findById(req.params.id)
        .then(course => res.render('courses/details', { course }))
        .catch(err => res.status(404).send(err));
};

exports.editCourse = (req, res) => {
    Course.findById(req.params.id)
        .then(course => res.render('courses/edit', { course }))
        .catch(err => res.status(404).send(err));
};

exports.updateCourse = (req, res) => {
    const { price, image, duration, courseStartDate } = req.body;

    Course.findByIdAndUpdate(req.params.id, { price, image, duration, courseStartDate })
        .then(() => res.redirect(`/courses/${req.params.id}`))
        .catch(err => res.status(400).send(err));
};

exports.deleteCourse = (req, res) => {
    Course.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/courses'))
        .catch(err => res.status(500).send(err));
};