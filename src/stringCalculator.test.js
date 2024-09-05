const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {

  test('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("12")).toBe(12);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("12,13")).toBe(25);
  });

  test('should handle any amount of numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

});