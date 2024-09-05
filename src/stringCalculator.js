class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    } else if (!numbers.includes(",")) {
      return parseInt(numbers, 10);
    }
  }
}

module.exports = StringCalculator;