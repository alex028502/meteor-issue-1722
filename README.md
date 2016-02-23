# meteor-issue-1722
demo some sample code I saw on a github issue for meteor js framework

https://github.com/meteor/meteor/issues/1722

showing how we can't, or don't know how, to get the post body using
WebApp.connectHandlers

##instructions

```bash
git clone https://github.com/alex028502/meteor-issue-1722.git
meteor test-packages meteor-issue-1722/
```
and go to http://localhost:3000 in your browser

You should see these three greens:

S: make sure we are on port 3000
S: make sure exec is working
S: make sure we can curl from here

and this red:
S: issue 1722

The last error should show that you are getting "empty\n" as the response, which
proves that we are actually getting a resonse from our api, and not just having
issues with curl.

###console error

I am getting the following warning in the console:
```
Trying to report a test not in a fiber! You probably forgot to wrap a callback in bindEnvironment.
```
However, that should affect the result of the test since we are getting the
body that we expect for a test failure "empty".


