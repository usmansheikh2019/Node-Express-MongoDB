// Todo application
// Add a new task *(if title already exist then show err)
// Remove a task using its title *(if not exist then show err)
// Read a task *(if not exist then show err)
const yargs          = require('yargs');
const Todo           = require('./Todo');
const addNewTask     = Todo.addNewTask;
const cleanAllTasks  = Todo.cleanAllTasks;
const echoTasks      = Todo.echoTasks;
const { removeTask } = require('./removeTask');

//Add a new task
yargs.command({
    command: 'add',
    describe: 'Add a new task',
    builder: {
        title: {
            describe: 'Title of the task',
            alias: 't',
            type: 'string',
            demandOption: true,
        },
        description:{
            describe: 'Description of the task',
            alias: 'd',
            type: 'string',
            demandOption: false,
            default: 'No further description'
        },
    },
    handler ({title,description}) {
        addNewTask(title,description);
    }
});

// Remove a task
yargs.command({
    command: "remove",
    describe: "Remove a task from databasse",
    builder:{
        title: {
            alias: "t",
            describe: "Title of the task",
            type: "string",
            demandOption: true
        },
    },
    handler( { title } ){
        removeTask(title);
    }
});

//Echo tasks
yargs.command({
    command: "echo",
    describe: "Echo tasks",
    handler: () => {
        echoTasks();
    }
});

//Remove all tasks
yargs.command({
    command: "wipe",
    describe: "Clear the whole todo list",
    handler: () => {
        cleanAllTasks();
    }
});



yargs.parse();
