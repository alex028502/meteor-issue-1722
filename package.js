Package.describe({
  name: 'issue-1722',
  version: '0.0.1',
  summary: 'demo for github issue 1722',
  git: 'https://github.com/alex028502/meteor-issue-1722.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('webapp');
  api.use('ecmascript');
  api.addFiles('issue-1722.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('issue-1722');
  api.addFiles('issue-1722-tests.js', 'server');
});
