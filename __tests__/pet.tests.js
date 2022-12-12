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
    it("set up the initial hunger", () =>{
        const pet = new Pet("Fido");
        expect(pet.hunger).toEqual(0);
    });
    it("growUp method it increase hunger", () => {
        const pet = new Pet("Fido");
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it("set up initial fitness to 10", () => {
        const pet = new Pet("Fido");
        expect(pet.fitness).toEqual(10);
    });
    it("set up fitness decrease when growing up", () => {
        const pet = new Pet("Fido");
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    it("walking pet increases fitness", () => {
        const pet = new Pet("Fido");
        pet.fitness = 0;
        pet.walk();
        expect(pet.fitness).toEqual(4);
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    it("increases fitness to a maximum fo 10", () => {
        const pet = new Pet("Fido");
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

});

