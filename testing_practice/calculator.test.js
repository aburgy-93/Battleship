const calculator = require("./calculator");

it("adds", () => expect(calculator.add(1, 2)).toBe(3));
it("subtracts", () => expect(calculator.subtract(3, 1)).toBe(2));
it("multiply", () => expect(calculator.multiply(2, 3)).toBe(6));
it("divide", () => expect(calculator.divide(6, 1)).toBe(6));
