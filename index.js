#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcome to samcli-number-guessing game\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your gussedNumber(number limit from 1 to 6):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you Guessed a correct Number.");
}
else {
    console.log("sorry,you guessed a wrongNumber");
}
