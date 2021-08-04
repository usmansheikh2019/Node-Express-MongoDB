
// Multi yargs
// const yargs = require('yargs');
// const getKey = (obj) => {
//     const keyArr = Object.keys(obj)
//     if (keyArr.includes("a") === true){
//         msg1();
//     } else if(keyArr.includes("b") === true){
//         msg2();
//     } else{
//         console.log("both keys not found");
//     }
// }
// const msg1 = () => {
//     console.log("msg1");
// }
// const msg2 = () => {
//     console.log("msg2");
// }
// yargs.command({
//     command: "call",
//     describe: "Call a function",
//     builder: {
//         first: {
//             alias: "a",
//             describe: "Call first function",
//             type: "string",
//           //  demandOption: true,
//         },
//         second: {
//             alias: "b",
//             describe: "Call second function",
//             type: "string",
//            // demandOption: true,
//         },
//     },
//     handler: (argv) => {
//         getKey(argv)
//     }
// })
// yargs.parse()
 
// const key = 5;
// const request = require('request')
// const option = {
//     url: 'https://jsonplaceholder.typicode.com/todos/5',
// }

// const callback = (error, response) =>{
//     console.log(`err : ${error}`);
//     const data =  response.body;
//     const parsedData = JSON.parse(data);
//     const checkDataExistance = parsedData.filter(d => d.userId === key)
//     console.log(checkDataExistance);
// }

// request('https://jsonplaceholder.typicode.com/todos',callback)




// const abc = (name1,name2,name3) => {
//     console.log(name1,name2,name3);
// }
// abc("usman",1)

//  const fs = require('fs')
// const arr = [{
//     title: "usman",
//     desc: "1111"
// },{
//     title: "hammad",
//     desc: "2222"
// },{
//     title: "wahaj",
//     desc: "3333"
// }]
// const title = "wahaj"
// const idx = arr.findIndex(x => x.title === title);
// console.log(idx);


// const jsonData = JSON.stringify(arr);
// fs.writeFileSync('data.txt',jsonData);
// const data = fs.readFileSync('data.txt');
// const objData = JSON.parse(data);
// objData.splice(0,1);
// const newJsonData = JSON.stringify(objData);
// fs.writeFileSync('data.txt',newJsonData)
// console.log(newJsonData);


// var arr = [
//     {
//         title: "usman",
//         desccription: "20"
//     },{
//         title: "hammad",
//         desccription: "21"
//     },{
//         title: "wahaj",
//         desccription: "25"
//     }
// ]

// // const arr = ["usman","hammad","usman","wahaj","shaharyar","muneeb"]
// //const foundDataInArray = (arr,title) => {
//     //const recData = arr.filter(d => d.title === title)
//     arr.splice(1,1)
//     console.log(arr)
// //}

// function alertTheCallersName(){
//     var callingFunctionName=alertTheCallersName.caller.name; //get the callers name here
//     console.log(typeof(callingFunctionName));
// }

// function someOtherFunction(){
//    alertTheCallersName();
// }
// someOtherFunction();

// foundDataInArray(arr,"hammad")

// const isDup = dataFound(arr,"hammadd")
// debugger
// console.log(isDup);
// const arr = ["Usman","Hammad","Asad","Wahaj","Muneeb"];
// const checkDup  = (array,elementToFound) => array.includes(elementToFound)
// const isPresent = checkDup(arr,"Usmann");
// console.log(isPresent);


// const arr = [{
//     name: "usman",
//     age: "21"
// },{
//     name: "hammad",
//     age: "20"
// },{
//     name: "wahaj",
//     age: "25"
// }]
// // console.log(`Old data: \n`,arr);
// const newArr = {
//     name: "Shaharyar",
//     age: "28"
// }
// // const newData = [...arr,newArr];
// console.log([...arr,newArr]);
// console.log(`\n`,arr,`\n`,newArr);


// const createNewObj = (title,description) => {
//     const obj = {
//         title,
//         description
//     }
//     return obj
// }
// console.log(createNewObj("Assignment","today"));

// const arr = []
// const check = !(arr.length)
// console.log(check);


// const a = [1,1]
// const isPresent = a.length
// if(isPresent){
//     console.log(`isPresent =`, Boolean(isPresent));
// }else{
//     console.log(`isPresent =`, Boolean(isPresent));
// }

const request = require('request');
