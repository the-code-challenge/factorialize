const challengeFunction = require('./index.js')
const assert = require('assert')

describe('Factorialize', () => {

    /**
     * TEST DESCRIPTION
     */
    it('(Test-1) 5 should return 120', () => {

        let result = challengeFunction(5)
        let expected = 120

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('(Test-2) 10 should return 3628800', () => {
        let result = challengeFunction(10)
        let expected = 3628800

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('(Test-3) 1 should return 1', () => {
        let result = challengeFunction(1)
        let expected = 1

        assert.strictEqual(result,expected)
    })

})
