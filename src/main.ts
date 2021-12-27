#!/usr/bin/env node
import * as cmd from './cmd/mod';

import * as childProcess from 'child_process';
import * as process from 'process';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question('Input the name of the video: ', (answer: string) => {
        console.log(`Hello ${answer}`);
        console.log('Start converting video.');
        childProcess.exec(`ffmpeg -i ${answer}.mkv -vcodec copy -acodec copy ${answer}.mp4`);
        console.log('Start converting subtitle.');
        childProcess.exec(`ffmpeg -i ${answer}.mkv -map 0:s:6 ${answer}.zh.srt`);
        rl.close();
    });
    cmd.main();
}

main();
