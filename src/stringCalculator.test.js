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

  test('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('should handle different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,-4,3')).toThrow("negatives not allowed: -2, -4");
  });

  test('should ignore numbers greater than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("2,1001")).toBe(2);
  });

  test('should support delimiters of any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//[***]\n4***2***3")).toBe(9);
  });

});