"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');
var testJobs = [{ name: 'none', value: '' }, { name: 'smoke test', value: 'smoke' }, { name: 'regression test', value: 'regression' }];

module.exports = engine({
  types: conventionalCommitTypes.types,
  testJobs: testJobs,
  defaultType: process.env.CZ_TYPE,
  defaultScope: process.env.CZ_SCOPE,
  defaultSubject: process.env.CZ_SUBJECT,
  defaultBody: process.env.CZ_BODY,
  defaultIssues: process.env.CZ_ISSUES
});
