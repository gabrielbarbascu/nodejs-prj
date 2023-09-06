import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomColor';

const color = randomColor({ hue: argv[2], luminosity: argv[3] });

console.log(
  chalk.hex(color)(`  ###############################
  ###############################
  ###############################
  ####                       ####
  ####         ${color}       ####
  ####                       ####
  ###############################
  ###############################
  ###############################`),
);
