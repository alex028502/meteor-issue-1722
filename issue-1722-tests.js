///wrapper for curl command on https://github.com/meteor/meteor/issues/1722

var exec = Npm.require('child_process').exec;

Tinytest.add('make sure we are on port 3000', function (test) {
  //want to leave the curl command exactly like the one in the snippet on
  //github
  test.equal(
    Meteor.absoluteUrl(""),
    "http://localhost:3000/",
    "need to use the default port so that we can test curl command as is"
  );
});

Tinytest.addAsync('make sure exec is working', function (test, done) {
  var test_string = "can you see this?";
  exec("echo " + test_string, function (error, stdout, stderr) {
    test.isFalse(stderr, "should have no error output");
    test.isFalse(error, "should have no error");
    test.equal(stdout, test_string + "\n");
    done();
  });
});

Tinytest.addAsync('make sure we can curl from here', function (test, done) {
  exec("curl http://localhost:3000", function (error, stdout, stderr) {
    test.include(stdout, "<title>Tests</title>");
    test.isTrue(stderr, "error output is updates with curl");
    test.isFalse(error, "should have no error");
    done();
  });

});

Tinytest.addAsync('issue 1722', function (test, done) {
  exec('curl --data "teststring=qwertyuiopasdfghjklzxcvbnm" http://localhost:3000/api/test/', function (error, stdout, stderr) {
    test.isTrue(stderr, "error output is updates with curl");
    test.isFalse(error, "should have no error");
    test.notEqual(stdout, "empty\n", "should not be empty");
    test.equal(stdout, "qwertyuiopasdfghjklzxcvbnm\n", "should be what was in the curl command");
    done();
  });

});
