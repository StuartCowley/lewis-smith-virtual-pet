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

    Pet.prototype.checkUp = function(){
       if(this.fitness <= 3 && this.hunger >= 5) {
        return this.feeling = "I am hungry AND I need a walk";
       } else if(this.fitness > 3 && this.hunger < 5) {
            return this.feeling = "I feel great";
        } else if(this.fitness <= 3 && this.hunger < 5) {
            return this.feeling = "I need a walk";
        } else {
           return this.feeling = "I am hungry";
        }
    };
   

//create a checkUp method on the Pet function that exemplifies the below:
// if pet fitness < 3 `I need a walk`;
// if pet hunger >= 5 `I am hungry`;
// if both of the above are true, `I am hungry AND I need a walk`;
// if both of the above are false, `I feel great!'


module.exports = Pet;

