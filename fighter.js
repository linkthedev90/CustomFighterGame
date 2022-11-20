// Parent class that sets the basic information for all fighters - ex HP
export class Fighter {
    // Class variables that will track the attack strength of a character
    currentPower = 0;
    // Class variables that will track the damage taken from the enemy
    currentDamage = 0;

    constructor(name = null, hp = null) {
        this.name = name;
        this.hp = hp;
    }

    // Test method that states the name of the character
    intro() {
        console.log("My name is " + this.name);
    }

    // Method that calculates the attack power of the character
    // stores it into the currentPower variable
    // then returns a string to the <p> HTML saying "Character attacks"!
    attack() {
        this.currentPower = Math.floor(Math.random() * 40) + 1;
        var message = `${this.name} attacks!`;
        return message;
    }

    // Method that takes in enemies currentPower class variable
    // Sets the value to currentDamage
    // Reduces the character HP by the damages taken
    // resets the currentDamage to 0
    // then returns a string to the <p> HTML showing the damage taken.
    damage(enemyPower) {
        this.currentDamage = enemyPower;
        var message = `${this.name} took ${String(this.currentDamage)} points of damage.`
        this.hp = this.hp - enemyPower;
        this.currentDamage = 0;
        return message;
    }
}


