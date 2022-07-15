exports.join_club_get = function (req, res, next) {
  res.render('index', { title: 'Join Members Club', content: 'join/club', props: { errors: undefined } });
};

exports.join_club_post = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};

exports.join_admin_get = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};

exports.join_admin_post = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};
