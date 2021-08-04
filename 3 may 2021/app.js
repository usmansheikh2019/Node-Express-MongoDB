const validator = require('validator');
const chalk     = require('chalk');
const yargs     = require('yargs');
const fs        = require('fs');
const printMsg = require('./msg');

const msg = printMsg();
console.log(msg);
const myEmail = 'usmanbuddy2016#gmail.com';
console.log(validator.isEmail(myEmail));
console.log(chalk.bgGreen.black.bold("hello world"));

// Command line argument using yargs.command()
yargs.command({
    command: 'delete',
    describe: 'delete a record',
    builder: {
        user:{
            describe: 'Name of the user',
            alias: 'u',
            demandOption: false,
            type: 'string',
            default: 'host',
        },
    },
    handler: (argv) => { 
        console.log(`Deleting`,argv.user) 
    }
})
yargs.parse();
// console.log(`Username :`,yargs.argv.uname);

const obj = {
    name: 'usman',
    age:  20,
    course: 'IOT',
    batch: 'two',
    quarter: 'four'
}
// obj --> json format
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);
// json format --> obj 
const myObj = JSON.parse(jsonStr);
console.log(myObj);

// to write in txt file we need a jsonString format
fs.writeFileSync('data.txt',jsonStr);
// However, any changes on the object will overwrite the txt file usinf fs.writeFileSync()

// To read 
console.log(fs.readFileSync('data.txt'));
// But Output will be like this  <Buffer 7b 22 6e 3a 22 74 ... 21 more bytes>

// To make it readable, Do this,
console.log(fs.readFileSync('data.txt').toString());

// Try to read a non-existing file
console.log(fs.readFileSync('file.txt'));
// A long error will appear. To solve this problem, use try/catch method.

try{
    console.log(fs.readFileSync('file.txt'));
}
catch(e){
    console.log(`File not found`,e.message);
    return [];
}