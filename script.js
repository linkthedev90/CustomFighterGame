// Allows this file to access the Warrior class via Export / import module
// import {Warrior} from "./warrior.js";
import { Vegeta } from "./characters/vegeta.js";
import { Cloud } from "./characters/cloud.js";


// Defining Variables / Objects
var button = document.getElementById("button");

var playerOneImage = document.getElementById("playerOneImage");
var playerOneLog = document.getElementById("logs");
var playerOne = document.getElementById("playerOne");


var playerTwoImage = document.getElementById("playerTwoImage");
var playerTwoLog = document.getElementById("logs");
var playerTwo = document.getElementById("playerTwo");


var playerOneHealthBar = document.getElementById("pOneHp");

var playerOneHealthBarText = document.getElementById("lifeBarTextP1");

var playerTwoHealthBar = document.getElementById("pTwoHp");

var playerTwoHealthBarText = document.getElementById("lifeBarTextP2");


// click events
button.addEventListener("click", startGame, false);

button.addEventListener("click", disableButton, false);



// function to pause actions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// function to disable the button after it is clicked
function disableButton() {
    button.disabled = true;
}

// Animation that makes the Player One picture blink
async function playerOneHit() {
    playerOne.style.opacity = "0.1"
    await sleep(100);
    playerOne.style.opacity = "1.0"
    await sleep(100);
    playerOne.style.opacity = "0.5"
    await sleep(100);
    playerOne.style.opacity = "1.0"
}

// Animation that makes the Player Two picture blink
async function playerTwoHit() {
    playerTwo.style.opacity = "0.1"
    await sleep(100);
    playerTwo.style.opacity = "1.0"
    await sleep(100);
    playerTwo.style.opacity = "0.5"
    await sleep(100);
    playerTwo.style.opacity = "1.0"
}

// function makes the frame greyscale when called
function playerOneKO() {
    playerOne.style.filter = "grayscale(100%)";
}

function playerTwoKO() {
    playerTwo.style.filter = "grayscale(100%)";
}


// Object from subclass Warrior
//let player1 = new Warrior("Goku", 100, "https://i.ebayimg.com/images/g/J8YAAOSwVY1ZpOt0/s-l500.jpg");
let player1 = new Vegeta();
var p1LifeBarConversion = 400;

// Object from subclass Warrior
//let player2 = new NastyLady();
let player2 = new Cloud();
var p2LifeBarConversion = 400;


function updateLifeBarP1(p1LifeBar, p2AttackPower) {
    
    var amountToDeduct = Number(p2AttackPower * 4);
    var newLifeBar = p1LifeBarConversion - amountToDeduct;

    if (newLifeBar < 0) {

        newLifeBar = 0

        p1LifeBarConversion = newLifeBar;

        p1LifeBar.style.width = `${String(newLifeBar)}px`;
    
        playerOneHealthBarText.innerHTML = String(0) + "/100";

    } else {
        p1LifeBarConversion = newLifeBar;

        p1LifeBar.style.width = `${String(newLifeBar)}px`;
    
        playerOneHealthBarText.innerHTML = String(player1.hp) + "/100";
    }
    
}



function updateLifeBarP2(p2LifeBar, p1AttackPower) {
    
    var amountToDeduct = Number(p1AttackPower * 4);
    var newLifeBar = p2LifeBarConversion - amountToDeduct;

    if (newLifeBar < 0) {

        newLifeBar = 0

        p2LifeBarConversion = newLifeBar;

        p2LifeBar.style.width = `${String(newLifeBar)}px`;
    
        playerTwoHealthBarText.innerHTML = String(0) + "/100";

    } else {
        p2LifeBarConversion = newLifeBar;

        p2LifeBar.style.width = `${String(newLifeBar)}px`;
    
        playerTwoHealthBarText.innerHTML = String(player2.hp) + "/100";
    }
    
}


// Main Game Loop
async function startGame() {

    //playerOneHealthBar.style.width = "10px";

    // Image variables to load character images
    playerOneImage.src = player1.img;
    playerTwoImage.src = player2.img;

    // Boolean to control While loop
    var gameRunning = true;

    // While loop to run the game until one player is dead
    while (gameRunning) {

        
        // Player One Attack Prompt
        playerOneLog.innerText = player1.attack();

        // Function to temporialy pause code in milliseconds
        await sleep(1000);
        playerTwoHit()
        
        // Player Two takes damage from Player One
        playerTwoLog.innerText = player2.damage(player1.currentPower);
        updateLifeBarP2(playerTwoHealthBar, player1.currentPower);
        await sleep(1000);


        // Logic to check if any Fighter's HP is 0. 
        // If 0, while loop breaks
        if (Boolean(player1.hp < 1 || player2.hp < 1) == true) {
            break;
        }

        await sleep(2000);
        playerTwoLog.innerText = player2.attack();

        await sleep(2000);
        playerOneHit();
        playerOneLog.innerText = player1.damage(player2.currentPower);
        updateLifeBarP1(playerOneHealthBar, player2.currentPower);

        await sleep(2000);

        if (Boolean(player1.hp < 1 || player2.hp < 1) == true) {
            break;
        }

        // Loop restarts continuing battle

    }

    // After the While loop ends - when a fighter is dead - the logic below will determine who won. A alert will show.
    if (player1.hp <= 0) {
        //console.log("Goku is dead");
        
        playerOneLog.innerText = player1.name + " is KO'd";
        playerOneKO();
        player2.victory();
        //alert(player2.name + " Wins!")
        
    } else if (player2.hp <= 0) {
        //console.log("Vegeta is dead");
        
        playerTwoKO();
        playerTwoLog.innerText = player2.name + " is KO'd";
        player1.victory();
        //alert(player1.name + " Wins!")
    } else {
        alert("Something went wrong");
    }
}