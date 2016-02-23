//taken from https://github.com/meteor/meteor/issues/1722

Meteor.startup(function () {
  WebApp.connectHandlers.use(function(req, res, next) {
    var urlParts = req.url.split('/');
    if (urlParts[1] !== 'api') {
      next();
      return;
    }

    var teststring = (req.body ? req.body.teststring : "empty") + "\n";

    res.statusCode = "200";
    res.setHeader('Content-Length', Buffer.byteLength(teststring, 'utf8'));
    res.setHeader('Content-Type', 'application/json');
    res.write(teststring);
    res.end();
    return;
  });
});

