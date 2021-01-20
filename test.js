const challengeFunction = require('./index.js')
const assert = require('assert')

describe('Factorialize', () => {

    /**
     * TEST 1
     */
    it('(Test-1) 5 should return 120', () => {

        let result = challengeFunction(5)
        let expected = 120

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 2
     */
    it('(Test-2) 10 should return 3628800', () => {
        let result = challengeFunction(10)
        let expected = 3628800

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 3
     */
    it('(Test-3) 1 should return 1', () => {
        let result = challengeFunction(1)
        let expected = 1

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 4
     */
    it('(Test-4) 3 should return 6', () => {
        let result = challengeFunction(3)
        let expected = 6

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 5
     */
    it('(Test-5) 7 should return 5040', () => {
        let result = challengeFunction(7)
        let expected = 5040

        assert.strictEqual(result,expected)
    })

})
