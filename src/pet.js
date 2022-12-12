const MAXIMUM_FITNESS = 10;
const INITIAL_FITNESS = 4;
const GROWUP_HUNGER_INCREMENT = 5;
const GROWUP_AGE_INCREMENT = 1;
const GROWUP_FITNESS_DECREMENT = 3;
const FEED_HUNGER_DECREMENT = 3;
const INITIAL_HUNGER = 0;
const INITIAL_AGE = 0;

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    };

    Pet.prototype.growUp = function(){
        this.age += GROWUP_AGE_INCREMENT;
        this.hunger += GROWUP_HUNGER_INCREMENT;
        this.fitness -= GROWUP_FITNESS_DECREMENT;
    };

    Pet.prototype.walk = function(){
        if ((this.fitness + INITIAL_FITNESS) <= MAXIMUM_FITNESS) {
        this.fitness += INITIAL_FITNESS;
    }   else {
        this.fitness = MAXIMUM_FITNESS;
    }
    };

    Pet.prototype.feed = function(){
       if((this.hunger - FEED_HUNGER_DECREMENT) >= INITIAL_HUNGER) {
        this.hunger -= FEED_HUNGER_DECREMENT;
       } else {
        this.hunger = INITIAL_HUNGER;
       }
        
    };



module.exports = Pet;

