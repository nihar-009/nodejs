import validator from 'validator';
import chalk from 'chalk';

const test =  validator.isEmail('jegagay709@servergem.com'); //=> true
console.log(test ? chalk.green.inverse(test) : chalk.red.inverse(test));