const calc = require('./Calculator');

describe('Hex Calculator', () => {
    test('Adding two Hex Numbers', () => {
        expect(calc('A', '5', '+')).toBe('F');
    });

    test('Subtracting two Hex Numbers', () => {
        expect(calc('A', '5', '-')).toBe('5');
    });

    test('Multiplying two Hex Numbers', () => {
        expect(calc('A', '5', '*')).toBe('32');
    });

    test('Dividing two Hex Numbers', () => {
        expect(calc('A', '5', '/')).toBe('2');
    });

    test('Negative results', () => {
        expect(() => calc('2', 'A', '-')).toThrow("Result out of bounds");
    });

    test('Division by 0', () => {
        expect(() => calc('A', '0', '/')).toThrow("Cannot Divide by 0");
    });
})