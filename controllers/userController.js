exports.register_get = function (req, res, next) {
  res.render('index', { title: 'Register', content: 'user/register', props: { user: undefined, errors: undefined } });
};

exports.register_post = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};

exports.login_get = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};

exports.login_post = function (req, res, next) {
  res.send('NOT IMPLEMENTED');
};
