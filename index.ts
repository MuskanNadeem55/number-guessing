#! usr/bin/env node

import inquirer from "inquirer";

const randNum = Math.floor(Math.random() * 6 + 1);

const result = await inquirer.prompt([
  {
    message: "Please guess the number between 1 to 6: ",
    type: "number ",
    name: "userGuessedNum",
  },
]);

//Conditional statement

if (result.userGuessedNum === randNum) {
  console.log("Congratulations! You entered the correct number");
} else {
  console.log("Wrong, Please try again!");
}
