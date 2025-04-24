const assert = require('assert');
const { add, multiply } = require('./index');

// Test add function
assert.strictEqual(add(5, 3), 8, 'Addition test failed');
assert.strictEqual(add(-1, 1), 0, 'Addition with negative number test failed');
assert.strictEqual(add(0, 0), 0, 'Addition with zeros test failed');

// Test multiply function
assert.strictEqual(multiply(5, 3), 15, 'Multiplication test failed');
assert.strictEqual(multiply(-1, 1), -1, 'Multiplication with negative number test failed');
assert.strictEqual(multiply(0, 5), 0, 'Multiplication with zero test failed');

console.log('All tests passed!');
