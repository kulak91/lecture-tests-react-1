const filterTests = (tests, prefix) => {
  return tests.find(tests => tests.name.startsWith(prefix)).tests;
};

module.exports = filterTests;
