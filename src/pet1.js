const MAXIMUM_FITNESS = 10;
const INITIAL_FITNESS = 4;
const GROWUP_HUNGER_INCREMENT = 5;
const GROWUP_AGE_INCREMENT = 1;
const GROWUP_FITNESS_DECREMENT = 3;
const FEED_HUNGER_DECREMENT = 3;
const INITIAL_HUNGER = 0;
const INITIAL_AGE = 0;

class Pet1 {
    constructor(name) {
        this.name = name;
        this.age = INITIAL_AGE;
        this.hunger = INITIAL_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
        this.feeling = "absence of thought";
        this.children = [];
    };


    get isAlive(){
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    };

    growUp() {
        if(!this.isAlive){
            throw new Error('Your pet is no longer alive :(');
        }
        this.age += GROWUP_AGE_INCREMENT;
        this.hunger += GROWUP_HUNGER_INCREMENT;
        this.fitness -= GROWUP_FITNESS_DECREMENT;
    };

    walk() {
        if(!this.isAlive){
            throw new Error('Your pet is no longer alive :(');
        }
        if((this.fitness + INITIAL_FITNESS) <= MAXIMUM_FITNESS) {
            this.fitness += INITIAL_FITNESS;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };

    feed() {
        if(!this.isAlive){
            throw new Error('Your pet is no longer alive :(');
        }
        if((this.hunger - FEED_HUNGER_DECREMENT) >= INITIAL_HUNGER) {
            this.hunger -= FEED_HUNGER_DECREMENT;
           } else {
            this.hunger = INITIAL_HUNGER;
           }
        };   
    
    checkUp(){
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

    adoptChild(child){
        this.children.push(child);
    };

    haveBaby(babyNames){
        const child = new Pet1(babyNames);
        this.children.push(child);
    };
};
   module.exports = Pet1;