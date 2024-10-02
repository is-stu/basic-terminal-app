import yargs, { demandOption, describe } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: 'base',
      type: 'number',
      //   default: 5,
      demandOption: true, // Esto hace que el argumento b sea requerido
      describe: 'Base number to multiply',
    },
    l: {
      alias: 'limit',
      type: 'number',
      default: 10,
      describe: 'Limit number to multiply',
    },
    s: {
      alias: 'show',
      type: 'boolean',
      default: false,
      describe: 'Show multiplication table',
    },
    n: {
      alias: 'name',
      type: 'string',
      describe: 'Name of the file to save',
    },
    p: {
      alias: 'path',
      type: 'string',
      default: 'outputs',
      describe: 'Path to save the file',
    }
  })
  .check((argv) => {
    if (argv.b < 0 || isNaN(argv.b))
      throw new Error('Base number must be a positive number');

    return true;
  })
  .parseSync();
