function multiply (input) {
    
    const numbers = input.split(",").map(num => parseFloat(num.trim()));
    return numbers.reduce((a,b) => a*b);
    
}

module.exports = multiply;