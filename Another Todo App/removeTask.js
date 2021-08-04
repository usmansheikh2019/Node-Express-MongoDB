const fs = require('fs');
const Todo = require('./Todo');
const loadData = Todo.loadData;
const removeTask = (title) => {
    const data = loadData();
    const dataExist = data.find(d => d.title === title)
    if (dataExist){
        //const idx = data.findIndex(x => x.title === title);
        const idx = data.indexOf(title)
        console.log(idx);
        data.splice(idx,1);
        saveToDatabase(data, title);
    }else{
        console.log(`Title: "${title}", does not exist in database`);
    }
}
const saveToDatabase = (data, title) => {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('data.txt', jsonData);
    console.log(`Todo task: "${title}", is removed from database.`);
}
module.exports = {
    removeTask
}