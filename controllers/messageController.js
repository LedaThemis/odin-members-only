exports.create_message_get = function (req, res, next) {
  res.render('index', {
    title: 'Create Message',
    content: 'message/create',
    props: { message: undefined, errors: undefined },
  });
};

exports.create_message_post = function (req, res, next) {
    res.send('NOT IMPLEMENTED');
  };
  