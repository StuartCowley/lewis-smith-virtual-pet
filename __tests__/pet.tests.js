const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns a new object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("set the name property", () => {
        const pet = new Pet("Fido");

        expect(pet.name).toEqual("Fido");
    });
    it("set initial age to 0", () => {
        const pet = new Pet("Fido");
        expect(pet.age).toEqual(0);
    });
    it("set growUp method to increase age prop by 1", () => {
        const pet = new Pet("Fido");
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});

