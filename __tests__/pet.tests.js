const Pet = require("../src/pet");

describe("constructor", () => {
    it('returns a new object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('sets intial age to 0, hunger of 0, fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
        expect(pet.hunger).toEqual(0);
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
    
    
    it('sets growUp method to increase age prop by 1, hunger by 5, fitness down by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);

        pet.growUp();

        expect(pet.age).toEqual(2);
        expect(pet.hunger).toEqual(10);
        expect(pet.fitness).toEqual(4);
    }); 
});

describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
   
    it('walk increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1;

        pet.walk();

        expect(pet.fitness).toEqual(5);
    });
    it('walk increases fitness to a max of 10', () => {
        const pet = new Pet('Fido');
        pet.walk(); //initial fitness 10, after walk, still 10;

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });

    it('feed decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;

        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    it('feed decreases hunger by 3 but not below 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;

        pet.feed();

        expect(pet.hunger).toEqual(0); //without limit it would be -1;
    });
});

describe('checkUp', () => {
    it('lets you know how the pet is feeling - best case', () => {
        const pet = new Pet('Fido');
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great'); // default values;
    });
    it('lets you know how the pet is feeling - worst case', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('lets you know how the pet is feeling - just hungry', () => {
        const pet = new Pet('Fido');
        pet.fitness = 10;
        pet.hunger = 9;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry');
    });
    it('lets you know how the pet is feeling - just unfit', () => {
        const pet = new Pet('Fido');
        pet.hunger = 0;
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk');
    });
});

describe('isAlive', () => {
    it('lets you know if the pet is alive', () => {
        const pet = new Pet('Fido');
        expect(pet.isAlive).toEqual(true); //hunger 0; fitness 10;
        pet.growUp(); // hunger 5; fitness 7;
        pet.growUp(); //hunger 10; fitness 4;
        expect(pet.isAlive).toEqual(false);
    });
});
