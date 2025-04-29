const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, req.flash('loginMessage', 'No user found.'));
        if (!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Wrong password.'));
        return done(null, user);
    });
}));


passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, false, req.flash('registerMessage', 'Email is already taken.'));
        
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.gender = req.body.gender;
        newUser.number = req.body.number;

        newUser.save((err) => {
            if (err) throw err;
            return done(null, newUser);
        });
    });
}));

module.exports = passport;