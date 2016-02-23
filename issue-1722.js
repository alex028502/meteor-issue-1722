//taken from a snippet on https://github.com/meteor/meteor/issues/1722
//and to pass test

var querystring = Npm.require('querystring');

Meteor.startup(function () {
  WebApp.connectHandlers.use(function(req, res, next) {
    var urlParts = req.url.split('/');
    if (urlParts[1] !== 'api') {
      next();
      return;
    }

    if (req.method != "POST") {
      next();
    }

    var rawBody = "";

    //thanks http://stackoverflow.com/a/4310087/5203563
    req.on('data', function (data) {
      rawBody += data;
    });

    req.on('end', function () {
      req.body = querystring.parse(rawBody); //you'll probably want json but the test is written for query string

      var teststring = (req.body ? req.body.teststring : "empty") + "\n";

      res.statusCode = "200";
      res.setHeader('Content-Length', Buffer.byteLength(teststring, 'utf8'));
      res.setHeader('Content-Type', 'application/json');
      res.write(teststring);
      res.end();
    });

  });
});
