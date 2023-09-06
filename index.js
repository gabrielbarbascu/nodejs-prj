import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

const color = randomcolor({ hue: argv[2], luminosity: argv[3] });

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
