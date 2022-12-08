var readlineSync = require('readline-sync');
const chalkAnimation = require("chalk-animation");
const chalk = require('chalk');
const CFonts = require('cfonts');
let score = 0;
let welcomeMsg = chalk.hex('#844b93')(`Hey There !
What can I call you ?\n`);
let userName = readlineSync.question(welcomeMsg);
console.log(chalk.hex('#0be881')("\n------------------------------------------------------------"));
greet(userName);
console.log(chalk.hex('#0be881')("------------------------------------------------------------"));

console.log(chalk.hex('#0be881')(`Let's see how much do you know about Arindam ❓ 👀\n`));

question1 = {
  question: 'Arindam was born on __ July? 👶\n',
  answer: '27',
  ifCorrect: 'Yes ! it is 27 July. Dont forget to send me a gift 🎁 ',
  ifWrong: 'It is 27 July. Dont worry, wish me on 27th July and send me a gift 🎁 to make up for this 😆 '
}

question2 = {
  question: 'Arindam currently works in ________ ? 💻\n',
  answer: 'Accenture',
  ifCorrect: 'You got it right. Working in TCS since DEC 2018',
  ifWrong: 'Working in Accenture since Oct 2021.'
}

question3 = {
  question: 'Tea? Coffee? Sting?  ☕\n',
  answer: 'Sting',
  ifCorrect: 'Fun fact: Finished 5 Stings in one sitting xD.',
  ifWrong: 'Do you even know me? 😕',
}

question4 = {
  question: 'All time favorite TV show? 🎬\n',
  answer: 'Mr.Robot',
  ifCorrect: 'Mr.Robot is the OG in this one! ',
  ifWrong: 'Cant recommend enough if you haven`t yet already 👌',
}

question5 = {
  question: 'What is his favourite programming language? ⌨️\n',
  answer: 'javascript',
  ifCorrect: 'This quiz is written in Javascript. 🥳',
  ifWrong: 'Thats not right. Its Javascript, the same langauge in which this quiz is written.',
}
