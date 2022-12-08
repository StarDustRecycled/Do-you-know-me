var readlineSync = require('readline-sync');
const chalkAnimation = require("chalk-animation");
const chalk = require('chalk');
const CFonts = require('cfonts');
var score=0;
var welcomeMsg = chalk.hex('#844b93')(`Hey There !
What can I call you ?\n`);
var userName = readlineSync.question(welcomeMsg);
console.log(chalk.hex('#0be881')("\n------------------------------------------------------------"));
greet(userName);
console.log(chalk.hex('#0be881')("------------------------------------------------------------"));

console.log(chalk.hex('#0be881')(`Let's see how much do you know about Arindam ❓ 👀\n`));
