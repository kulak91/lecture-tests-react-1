const { filterTests } = require('../helpers/helpers');

const getTotal = scores => Object.keys(scores).reduce((result, key) => result + scores[key], 0);

const calculate = (filteredTests, scores) => {
	return filteredTests.reduce((result, test) => {
		const testScore = test.state === 'passed' ? scores[test.name] : 0;

		return result + testScore;
	}, 0);
};

const getErrorTests = (tests) => {
	return tests.filter(test => test.state === 'failed').reduce((result, test) => {
		return Object.assign({}, result, {
			[test.name]: {
				message: test.error
			}
		});
	}, {});
};

const calculateScoreByResult = (tests) => {
	return Object.keys(tests).reduce((result, test) => {
		return result + tests[test].stats.score;
	}, 0);
};

const getTotalByResult = tests => Object.keys(tests).reduce((result, test) => result + tests[test].stats.total, 0);

const calculateScores = (testResult, scores, maxScore) => {
	const tests = Object.keys(scores).reduce((result, testSuit) => {
		const tests = filterTests(testResult, `${testSuit}`);
		const total = getTotal(scores[testSuit]);
		const score = calculate(tests, scores[testSuit]);

		return Object.assign({}, result, {
			[testSuit]: {
				stats: {
					total,
					score,
				},
				tests: getErrorTests(tests),
			}
		});
	}, {});

	const score = calculateScoreByResult(tests) / getTotalByResult(tests);

	return {
		stats: {
			score: score * maxScore,
			total: maxScore
		},
		tests
	};
};

module.exports = calculateScores;
