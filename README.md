# CustomFighterGame
 Import any fighter and have them battle

Small application that allows two fighters to auto battle.

You can make your "fighter" anything you want! Just change the following attributes in the fighters class:
- Name
- Image link to your fighter
- Optional - Attack sfx & Victory sfx

![image](https://user-images.githubusercontent.com/118638677/202878206-fc59a2ce-4fca-49ba-b33f-b699715b78c5.png)


![image](https://user-images.githubusercontent.com/118638677/202878026-fba03503-a17f-4dd2-9aca-2fcd3ce5e2fe.png)

![image](https://user-images.githubusercontent.com/118638677/202878336-5a77dc3c-900f-4806-a057-14302053af19.png)


# Usage
1. Clone this Repo
2. Open the root directory in VS Code
3. Using a Live Server extension, open index.html locally.
4. Hit the button "Start The Game" to run the current loaded fighters

## Creating your own fighter
There is a file labeled "monsterTemplate.js" that you can use to quickly get a fighter into the game
1. Duplicate the "monsterTemplate.js" file
2. On line 8, Update the class from Monster to Whatever you want ( I use the fighters name )
3. On line 11, Update the name variable to your fighter's name
4. On line 14, Replace the "#" with a link to the picture you want to use for your fighter ( Can be a direct link from the web, or gif )
Optional Sfx
1. On line 23, Replace the "#" with a link to a attack sfx. This has a 30% chance of playing when your fighter attacks
2. On Line 43, Replace the "#" with a link to a victory sfx. This will play if your fighter wins

## Last Step
Once you have your unique class updated, import it into the script.js file with a similar import statement seen on line 3 or 4 in "script.js"

Then, update the player1 or player2 object, on line 70 / 75 in script.js,  to be your unqiue class.

Enjoy!
