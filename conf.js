exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.spec.js'],
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': true,
    'maxInstances': 3
  },
}