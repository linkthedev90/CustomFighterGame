import {Fighter} from "./fighter.js";

// Subclass of Parent Fighter Class
// This will hold the unique actions each monster can use
export class Warrior extends Fighter {
    constructor(name, hp, img,) {
        super()
        this.name = name;
        this.hp = hp;
        this.img = img;

    }

    chanceOfSound() {
        var chance = Math.floor(Math.random() * 4);
        if (chance == 3) {
            new Audio("#").play();
        }
    }

    attack() {
        var message = super.attack();
        this.chanceOfSound();
        return message;
    }

    damage(enemyPower) {
        var message = super.damage(enemyPower);
        new Audio("https://docs.google.com/uc?export=download&id=1aKT15mzzOFyNkgPuOWU-5WFL0y64Wdy-").play();
        return message;
    }

    
}
