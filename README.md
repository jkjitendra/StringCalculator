# StringCalculator

A simple String Calculator implemented in JavaScript using Test-Driven Development (TDD) methodology. This project is a kata exercise designed to enhance skills in writing clean, maintainable code by following TDD practices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Running Tests](#running-tests)

## Introduction

This project involves implementing a simple calculator that can take a string of numbers separated by delimiters and return their sum. It supports various features such as handling an unknown number of numbers, custom delimiters, and ignoring numbers larger than a specified limit. The project showcases a step-by-step approach to implementing features using TDD.

## Features

- Return `0` for an empty string.
- Handle a single number and return its value.
- Support the addition of two numbers separated by a comma.
- Handle an unknown number of numbers separated by commas or new lines.
- Support custom delimiters specified in the input string.
- Throw an exception when negative numbers are provided.
- Ignore numbers greater than 1000.
- Support multiple delimiters of varying lengths.

## Requirements

- Node.js and npm (Node Package Manager)
- Jest (JavaScript Testing Framework)

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jkjitendra/StringCalculator.git
   cd StringCalculator
   ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
## Usage

To use the String Calculator, you can instantiate the StringCalculator class and use the add method to pass a string of numbers.
```javascript
const calculator = new StringCalculator();

console.log(calculator.add("0"));            // Expected output: 0
console.log(calculator.add("12"));           // Expected output: 12
console.log(calculator.add("12,13"));        // Expected output: 25
console.log(calculator.add("1,2,3,4,5"));    // Expected output: 15
console.log(calculator.add("1\n2,3"));       // Expected output: 6
console.log(calculator.add("//;\n1;2"));     // Expected output: 3

try {
    console.log(calculator.add("1,-2,3,-4")); // Expected output: Error with message "negatives not allowed: -2, -4"
} catch (error) {
    console.error(error.message);
}

console.log(calculator.add("2,1001"));                // Expected output: 2
console.log(calculator.add("//[***]\n4***2***3"));    // Expected output: 9
console.log(calculator.add("//[**][%%%]\n1**2%%%3")); // Expected output: 6
```
## Running Tests
To run the tests, use the following command:

```bash
npm test
```