class Ninja {

    constructor( name, health, speed = 3, str = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.str = str
    }

    drinkSake(){
        console.log(`${this.name} Drank Sake and increased thie health by 10!`)
        this.health += 10
    }

    sayName(){
        console.log(`I am the Legendary Ninja ${this.name}`)
    }

    showStats(){
        console.log(`Stats for ${this.name}  Health: ${this.health} Speed: ${this.speed} Strength: ${this.str }`)
    }
}


class Sensei extends Ninja {

    constructor(  name, health=200, speed = 10, str = 10, wisdom = 10){
        super( name, health, speed, str)
        this.wisdom = wisdom
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log(`Sensei ${this.name} says: "What one programmer can do in one month, two programmers can do in two months."`)
    }

    showStats(){
        console.log(`Stats for ${this.name}  Health: ${this.health} Speed: ${this.speed} Strength: ${this.str }`)
    }
}



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

console.log(ninja1, superSensei)