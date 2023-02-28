import chalk from 'chalk';
import fs from 'fs';
import takeFile from "./index.js";
import validateList from "./http-validation.js";

const args = process.argv;

async function printList(validate, list, id='') {
    if (validate) {
        console.log(
            chalk.yellow('Lista validada:'),
            chalk.bgGreen(id),
            await validateList(list)
        ); 
    } else { 
        console.log(
            chalk.yellow('Lista de links:'),
            chalk.bgGreen(id),
            list
            );
        }
}

async function processText(args) {
    const path = args[2];
    const validate = args[3] === 'valid';

    try {
        fs.lstatSync(path);
    } catch (err) {
        if (err instanceof Error) {
            console.log(chalk.red(`${err.code}:`,"No such file or directory."));
            return;
        }

    }

    if (fs.lstatSync(path).isFile()) {
        const result = await takeFile(path);
        printList(validate, result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await takeFile(`${path}/${fileName}`);
            printList(validate, list, fileName);
        });
    }

}

processText(args);

