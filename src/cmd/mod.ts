import * as process from 'process';

import * as constants from '../constants/mod';
import { help } from '././help';

export function main() {
    if (process.argv.length < 4) {
        if (process.argv[2] == 'version') {
            console.log(`${constants.AppName} version: ${constants.Version}`);
        }
        help();
    }
}
