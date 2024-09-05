class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    } else if (!numbers.includes(",")) {
      return parseInt(numbers, 10);
    } else {
      const [num1, num2] = numbers.split(",");
      return parseInt(num1, 10) + parseInt(num2, 10);
    }
  }
}

module.exports = StringCalculator;