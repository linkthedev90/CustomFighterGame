import {Fighter} from "../fighter.js";

// Subclass of Parent Fighter Class
// This will hold the unique actions each monster can use


// Update class name to be unique to your monster
export class Cloud extends Fighter {

    // Your Monsters Name
    name = "Cloud"

    //
    hp = 100;

    // Your Monsters Image
    img = "https://media.tenor.com/2ypLEMeRNWwAAAAd/cloud-strife-cloud.gif"

    // 1 in 3 change of sfx playing when attacking
    chanceOfSound() {
        var chance = Math.floor(Math.random() * 4);
        if (chance == 3) {
            new Audio("https://docs.google.com/uc?export=download&id=17MQTes2xyIUvH3XqGB3PT6PCBx47OYKE").play();
        }
    }

    attack() {
        var message = super.attack();
        this.chanceOfSound();
        return message;
    }


    
    damage(enemyPower) {
        var message = super.damage(enemyPower);
        // Hit sfx
        new Audio("https://docs.google.com/uc?export=download&id=1aKT15mzzOFyNkgPuOWU-5WFL0y64Wdy-").play();
        return message;
    }

    // Victory music
    victory() {
        
        new Audio("https://docs.google.com/uc?export=download&id=1Ep-N9RqTeQoHkHEnLyZluUCadAkm7YBB").play();
    }

}


