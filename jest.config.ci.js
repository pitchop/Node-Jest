'use strict';

module.exports = {
    ...require('./jest.config'),
    coverageReporters: ['json'],
    reporters: [
        [
            'jest-junit',
            {outputDirectory: './', outputName: 'test-results.xml'},
        ],
    ],
};
