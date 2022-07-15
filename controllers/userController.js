const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const User = require('../models/user');

exports.register_get = function (req, res, next) {
  res.render('index', { title: 'Register', content: 'user/register', props: { user: undefined, errors: undefined } });
};

exports.register_post = [
  body('first_name', 'First name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('last_name', 'Last name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('username', 'Username must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .isEmail()
    .withMessage('Username must be an email.')
    .custom((value) => {
      return User.findOne({ username: value }).then((user) => {
        if (user) {
          return Promise.reject('Username already in use.');
        }
      });
    })
    .escape(),
  body('password', 'Password must 8 characters or more.').trim().isLength({ min: 8 }).escape(),
  body('confirm_password')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password.');
      }

      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) next(err);

      const fields = {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        username: req.body.username,
        password: hashedPassword,
      };

      const user = new User(fields);
      console.log(errors);

      if (!errors.isEmpty()) {
        res.render('index', {
          title: 'Register',
          content: 'user/register',
          props: { user: user, errors: errors.errors },
        });
      } else {
        user.save((err) => {
          if (err) next(err);

          res.redirect('/');
        });
      }
    });
  },
];

exports.login_get = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};

exports.login_post = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};
