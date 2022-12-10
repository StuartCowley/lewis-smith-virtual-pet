const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns a new object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
});

