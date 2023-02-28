import fs from 'fs';
import chalk from 'chalk';


function handleError(err) {
    if (err.code == "ERR_INVALID_ARG_TYPE") {
        throw new Error(chalk.red(err.code, "Invalid argument for path variable."))
    }
    throw new Error(chalk.red(err.code, "No such file or directory."));
}


function extractLinks(txt) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;           // Regular expression
    const capturesObj = [...txt.matchAll(regex)];
    const results = capturesObj.map(capture => ({[capture[1]]: capture[2]}));
    return results.length !== 0 ? results : "No contents found in file.";
}

// Async await

async function takeFile(path) {
    try {
        const txt = await fs.promises.readFile(path, 'utf-8');
        return extractLinks(txt);
    } catch (err) {
        handleError(err);
    }
}

// Async primises with then()

// function takeFile(path) {
//     fs.promises.readFile(path, 'utf-8')
//         .then((txt) => console.log(chalk.green(txt)))
//         .catch(handleError)
// }

// Sync
// function takeFile(path) {
//     fs.readFile(path, 'utf-8', (err, out) => {
//         if (err) {
//             handleError(err);
//         }
//         console.log(chalk.green(out));
//     });
// }


export default takeFile;