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
    const numArray = sanitizedNumbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;