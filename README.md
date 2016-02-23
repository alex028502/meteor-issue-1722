# meteor-issue-1722
There was an issue here: https://github.com/meteor/meteor/issues/1722 about
handling posts with WebApp.connectHandlers in the meteor framework.  This
sample package first converted it into a package and tinytest, and then was
modified to solve the issue, and show how to get posted data.

##instructions

```bash
git clone https://github.com/alex028502/meteor-issue-1722.git
meteor test-packages meteor-issue-1722/
```
and go to http://localhost:3000 in your browser

You should see all green, but if you go back one commit, you won't.

###console error

I am getting the following warning in the console:
```
Trying to report a test not in a fiber! You probably forgot to wrap a callback in bindEnvironment.
```
However, that should affect the result of the test since we are getting the
body that we expect for a test failure "empty".
