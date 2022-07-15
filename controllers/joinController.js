const User = require('../models/user');

exports.join_club_get = function (req, res, next) {
  res.render('index', { title: 'Join Members Club', content: 'join/club', props: { errors: undefined } });
};

exports.join_club_post = function (req, res, next) {
  if (req.user) {
    if (req.user.isMember) {
      res.render('index', {
        title: 'Join Members Club',
        content: 'join/club',
        props: { errors: [{ msg: "You're already a member!" }] },
      });
    } else if (req.body.passcode === process.env.CLUB_PASSCODE) {
      User.findByIdAndUpdate(req.user.id, { isMember: true }, {}, (err, updatedUser) => {
        if (err) {
          return next(err);
        }

        res.redirect('/');
      });
    } else {
      res.render('index', {
        title: 'Join Members Club',
        content: 'join/club',
        props: { errors: [{ msg: 'Wrong passcode! look carefully!' }] },
      });
    }
  } else {
    res.redirect('/join/club');
  }
};

exports.join_admin_get = function (req, res, next) {
  res.render('index', { title: 'Become Admin', content: 'join/admins', props: { errors: undefined } });
};

exports.join_admin_post = function (req, res, next) {
  if (req.user) {
    if (req.user.isAdmin) {
      res.render('index', {
        title: 'Become Admin',
        content: 'join/admins',
        props: { errors: [{ msg: "You're already an admin!" }] },
      });
    } else if (req.body.passcode === process.env.ADMINS_PASSCODE) {
      User.findByIdAndUpdate(req.user.id, { isAdmin: true }, {}, (err, updatedUser) => {
        if (err) {
          return next(err);
        }

        res.redirect('/');
      });
    } else {
      res.render('index', {
        title: 'Become Admin',
        content: 'join/admins',
        props: { errors: [{ msg: 'Wrong passcode! look carefully!' }] },
      });
    }
  } else {
    res.redirect('/join/admins');
  }
};
