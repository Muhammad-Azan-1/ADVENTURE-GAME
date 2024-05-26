#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// let energyOfPlayer = 100;
// let energyOfEnemy = 100;
class Player {
    constructor(name) {
        this.hpOfPlayer = 100;
        this.nameOfPlayer = name;
    }
    HpDescreaseOfPlayer() {
        let newHpOfPlayer = this.hpOfPlayer - 25;
        this.hpOfPlayer = newHpOfPlayer;
    }
    HpIncreaseOfPlayer() {
        this.hpOfPlayer = 100;
    }
}
class Enemy {
    constructor(name) {
        this.hpOfEnemy = 100;
        this.nameOfEnemy = name;
    }
    HpDescreaseOfEnemey() {
        let newHpOfEnemy = this.hpOfEnemy - 25;
        this.hpOfEnemy = newHpOfEnemy;
    }
}
let loop = false;
do {
    //1) first we have to ask the name of the player
    let answer1 = await inquirer.prompt([
        {
            message: "Please enter your name",
            type: "string",
            name: "player",
        },
    ]);
    let newPlayer = new Player(answer1.player); //// Here I am creating an instance,(When you create an instance of a class, you're essentially creating a distinct object based on the blueprint provided by the class), after passing the value (asnwer1.Player) to the constructor function we get a new object based on the blueprint of the class Player inside the varaible of instance in our case it is newPlayer
    console.log("\t\n", chalk.whiteBright(chalk.bgCyanBright.bold(`\t Welcome to the Adventure Game Dear : ${newPlayer.nameOfPlayer}\n`)));
    //2) Then what action he has to play
    let answer2 = await inquirer.prompt([
        {
            message: "Please select your opponent or select Exit to leave",
            type: "list",
            choices: ["Zombi", "Dragon", "Exit"],
            name: "opponent",
        },
    ]);
    let newEnemy = new Enemy(answer2.opponent); //// Here I am creating an instance,(When you create an instance of a class, you're essentially creating a distinct object based on the blueprint provided by the class) after passing the value (asnwer2.opponent) to the constructor function we get a new object based on the blueprint of the class enemy
    //3) if select the option no 1 then what should we do
    if (newEnemy.nameOfEnemy == "Zombi") {
        console.log(chalk.bgWhiteBright(chalk.greenBright.bold(`\n\tPlayer: ${newPlayer.nameOfPlayer} VS ${chalk.redBright(`Enemy: ${newEnemy.nameOfEnemy}`)}\n`)));
        while (true) {
            let answer3 = await inquirer.prompt([
                {
                    message: "What do you want to do?",
                    type: "list",
                    choices: ["Attack", "HP", "Run"],
                    name: "action",
                },
            ]);
            if (answer3.action == "Attack") {
                console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer}`)} attacked ${chalk.red.bold(newEnemy.nameOfEnemy)}\n`);
                // welcoming messeage
                let randomNumber = Math.floor(Math.random() * 2); //creates a random number
                if (randomNumber > 0) {
                    newPlayer.HpDescreaseOfPlayer();
                    console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer} has left = ${newPlayer.hpOfPlayer}% (Hp)`)}\n`);
                    console.log(`\n\t ${chalk.red.bold(`${newEnemy.nameOfEnemy} has left = ${newEnemy.hpOfEnemy}% (Hp)`)}\n`);
                }
                if (newPlayer.hpOfPlayer <= 0) {
                    console.log(chalk.bgRed(`\n\t ${chalk.bold(`${newPlayer.nameOfPlayer} has lost the Game`)}\n`));
                    break; // based on the random number generated
                }
                else if (randomNumber <= 0) {
                    newEnemy.HpDescreaseOfEnemey();
                    console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer} has left = ${newPlayer.hpOfPlayer}% (Hp)`)}\n`);
                    console.log(`\n\t ${chalk.red.bold(`${newEnemy.nameOfEnemy} has left = ${newEnemy.hpOfEnemy}% (Hp)`)}\n`);
                    if (newEnemy.hpOfEnemy <= 0) {
                        console.log(chalk.bgGreen(`\n\t ${chalk.bold(`${newPlayer.nameOfPlayer} has Won the Game`)} \n`));
                        break;
                    }
                }
            }
            if (answer3.action == "HP") {
                newPlayer.HpIncreaseOfPlayer();
                console.log("\n\t", chalk.green.bold(`${newPlayer.nameOfPlayer} your HP is increased = ${newPlayer.hpOfPlayer} %\n`));
            }
            if (answer3.action == "Run") {
                console.log(chalk.red.bold(`\n GAME OVER,\n\t${newPlayer.nameOfPlayer} You get caught by ${newEnemy.nameOfEnemy} you died\n`));
                break;
            }
        } // while loop end
        /// PARt 2 if user select Dragon
    }
    else if (answer2.opponent == "Dragon") {
        console.log(chalk.bgWhiteBright(chalk.greenBright.bold(`\n\tPlayer: ${newPlayer.nameOfPlayer} VS ${chalk.redBright(`Enemy: ${newEnemy.nameOfEnemy}`)}\n`)));
        while (true) {
            let answer4 = await inquirer.prompt([
                { message: "Please select an option",
                    type: "list",
                    choices: ["Attack", "HP", "Run"],
                    name: "perform"
                }
            ]);
            if (answer4.perform == "Attack") {
                console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer}`)} attacked ${chalk.red.bold(newEnemy.nameOfEnemy)}\n`);
                let randomNumber = Math.floor(Math.random() * 2); //creates a random number
                if (randomNumber > 0) {
                    newEnemy.HpDescreaseOfEnemey();
                    console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer} has left = ${newPlayer.hpOfPlayer}% (Hp)`)}\n`);
                    console.log(`\n\t ${chalk.red.bold(`${newEnemy.nameOfEnemy} has left = ${newEnemy.hpOfEnemy}% (Hp)`)}\n`);
                }
                if (newEnemy.hpOfEnemy <= 0) {
                    console.log(chalk.bgRed(`\n\t ${chalk.bold(`${newPlayer.nameOfPlayer} has Won the Game`)}\n`));
                    break;
                }
                else if (randomNumber <= 0) {
                    newPlayer.HpDescreaseOfPlayer();
                    console.log(`\n\t ${chalk.green.bold(`${newPlayer.nameOfPlayer} has left = ${newPlayer.hpOfPlayer}% (Hp)`)}\n`);
                    console.log(`\n\t ${chalk.red.bold(`${newEnemy.nameOfEnemy} has left = ${newEnemy.hpOfEnemy}% (Hp)`)}\n`);
                }
                if (newPlayer.hpOfPlayer <= 0) {
                    console.log(chalk.bgGreen(`\n\t ${chalk.bold(`${newPlayer.nameOfPlayer} has Lost the Game`)} \n`));
                    break;
                }
            }
            if (answer4.perform == "HP") {
                newPlayer.HpIncreaseOfPlayer();
                console.log("\n\t", chalk.green.bold(`${newPlayer.nameOfPlayer} your HP is increased = ${newPlayer.hpOfPlayer} %\n`));
            }
            if (answer4.perform == "Run") {
                console.log(chalk.red.bold(`\n GAME OVER,\n\t${newPlayer.nameOfPlayer} You get caught by ${newEnemy.nameOfEnemy} you died\n`));
                break;
            } // while loop end
        }
    }
    if (answer2.opponent == "Exit") {
        console.log("\t\t", chalk.bgRed.bold(`\nExiting the Game!\n`)); /// to Exit the Game
        break;
    }
} while (!loop); // do-while loop end
