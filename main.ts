#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.hex('#870752')("\n================ IQRZ-WORD-COUNTER ================\n"));

// Prompt the user to enter a sentence //

let sentencetaker= await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.hex('#f88fcd')("Enter a sentence")
    }
]);
console.log(chalk.hex('#870752')("\n===================================================\n"));

// using.split(' ') to convert the input string into an array

console.log("SENTENCE WORDS:")
console.log(sentencetaker.sentence.split(' '))

// Showing the number of words(elements) in the array

let newarray =sentencetaker.sentence.split(' ');
console.log(chalk.green((`\nWORD COUNT:${newarray.length}`)));