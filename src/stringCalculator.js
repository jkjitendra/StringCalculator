class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/);
      delimiter = delimiterMatch[1];
      numbers = numbers.slice(4);
    }

    const sanitizedNumbers = numbers.replace(/\n/g, delimiter);
    return sanitizedNumbers.split(delimiter).reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}

module.exports = StringCalculator;