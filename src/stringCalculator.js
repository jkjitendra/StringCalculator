class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    } else {
      const sanitizedNumbers = numbers.replace(/\n/g, ',');
      return sanitizedNumbers.split(",").reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
  }
}

module.exports = StringCalculator;