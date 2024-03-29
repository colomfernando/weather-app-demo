module.exports = {
	moduleDirectories: [
		'node_modules',
		'src',
		'src/js',
		'src/js/core',
		'src/js/theme',
		'src/js/components'
	],
	setupFiles: ['jest-prop-type-error'],
	moduleFileExtensions: ['js', 'json', 'jsx'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false,
	collectCoverage: false,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	coverageReporters: ['text'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};
