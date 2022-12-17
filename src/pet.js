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
    this.feeling = "absence of thought";
    };

    Pet.prototype = {
        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
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
        if(!this.isAlive){
            throw new Error('Your pet is no longer alive :(');
        }
       if((this.hunger - FEED_HUNGER_DECREMENT) >= INITIAL_HUNGER) {
        this.hunger -= FEED_HUNGER_DECREMENT;
       } else {
        this.hunger = INITIAL_HUNGER;
       }
    };

    Pet.prototype.checkUp = function(){
        const UNFIT = this.fitness <= 3;
        const HUNGRY = this.hunger >= 5;
        const FIT = this.fitness > 3;
        const NOTHUNGRY = this.hunger < 5;
       if(UNFIT && HUNGRY) {
        return this.feeling = "I am hungry AND I need a walk";
       } else if(FIT && NOTHUNGRY) {
            return this.feeling = "I feel great";
        } else if(UNFIT) {
            return this.feeling = "I need a walk";
        } else {
           return this.feeling = "I am hungry";
        }
    };

    
   
//if pet fitness 0 or less then false;
//if pet hunger > 10 then false;
//if pet age > 30 then return false;
//otherwsie return true;



module.exports = Pet;

