exports.register = (req, res) => {
    const { username, password, gender, number } = req.body;
    
};

exports.login = (req, res) => {
    const { username, password } = req.body;
};

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });
};