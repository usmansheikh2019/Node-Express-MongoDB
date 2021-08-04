const fs = require('fs');
const addNewTask = (title,description) => {
    const data = loadData()
    const titleAlreadyExist = checkTitleExistence(data,title)
    if(titleAlreadyExist){
        console.log("Task already present in database");
    }else{
        const newTask = {
            title,
            description
        }
        saveToDatabase([...data,newTask],title,description)
    }
}
const checkTitleExistence = (data,title) =>{
    const isPresent = data.find(d => d.title === title);
    return isPresent
}
const saveToDatabase = (dataToAdd,title,description) => {
    const jsonData = JSON.stringify(dataToAdd)
    fs.writeFileSync("data.txt",jsonData);
    console.log(`A new task is added\nTask: ${title}\nDescription: ${description}`);
}
const loadData = () => {
    try{
        const rawData = fs.readFileSync("data.txt");
        const parsedData = JSON.parse(rawData);
        return parsedData;
    }
    catch(e){
        return []
    }
}

// clean all tasks from todo list
const cleanAllTasks = () => {
    const data = loadData();
    if(data.length === 0 ){
        console.log(`Database is empty.`);
    } else{
        fs.writeFileSync('data.txt',`[]`);
        console.log(`All clear.`);
    }
}

// echo tasks
const echoTasks = () => {
    const data = loadData();
    if(data.length === 0){
        console.log(`Database is empty.`);
    }else{
        const dataLength = data.length;
        console.log(`${dataLength} Tasks present in database`);
        data.forEach((element,index) => {
            console.log(`Task ${index+1}:\t
            Title: ${element.title}\t
            Description: ${element.description}`);
        });
    }
}
module.exports = {addNewTask, loadData, cleanAllTasks, echoTasks}
