
const multiply = require('./MultiplerCalculator');
describe("MultiplerCalculator ", () => {

    test("should handle multiplication when 0 is one input", () => {
        expect(multiply("0")).toBe(0);
    });

    test("should handle Multiplication when one of the input is 1", () => {
        expect(multiply("12,1")).toBe(12);
    });

})