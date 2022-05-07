import chalk from 'chalk';
import randomColor from 'randomcolor';

// importing librarys i need

const hue = process.argv[2];
const luminosity = process.argv[3];

// declare const for hue and luminosity

let color = randomColor();

if (!hue) {
    color = randomColor();
} else if (hue && !luminosity) {
    hue && !luminosity;
    color = randomColor({ hue: hue });
} else {
    color = randomColor({ hue: hue, luminosity: luminosity });
}

// go through all cases

console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('####                      #####'));
console.log(chalk.hex(color).bold(`####      ${color}        #####`));
console.log(chalk.hex(color).bold('####                      #####'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));

// console log box