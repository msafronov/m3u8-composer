const { test } = require('zora');

const { main } = require('../src/index');

test('main.js', ({ test }) => {
    test('should be ok', (assert) => {
        const result = main();
    
        assert.ok(result);
    });
});