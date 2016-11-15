const calculator = require('./calculator');

test('1 + 3 to equal 3', () => {
	expect(calculator(1, '+', 3).toBe(3));
});