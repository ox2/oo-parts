Package.describe({
  name: 'ox2:parts',
  summary: 'TESTING_DO_NOT_USE Variuos component style parts',
  version: '1.6.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // 3rd party
  api.use([
    'less'
    ]);
  api.addFiles('lib/oo-header.less', C);
  api.addFiles('lib/oo-item.less', C);
  api.addFiles('lib/oo-position.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:buttons');
  api.addFiles('tests/oo-parts-tests.js');
});
