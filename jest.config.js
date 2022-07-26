module.exports = {
    // preset: 'ts-jest', // If we are using TypeScript...
    testEnvironment: 'node',
    testResultsProcessor: "jest-sonar-reporter",
    "coveragePathIgnorePatterns": [
        "/node_modules/"
    ],
    // moduleNameMapper: {
    //     '^@app/(.*)$': '<rootDir>/src/$1'
    // }
};
