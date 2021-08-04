const express = require('express');
const path    = require('path');
const app = express();

//For absulute directory
    // console.log(__dirnmae);
    // console.log(__filename);

//For Joining paths
const pathToStaticFiles = path.join(__dirname,'../public');
//Now we use a built-in middleware function which is: express.static(root, [options])
//Additionaly we use app.use to send files directly to the user 
app.use(express.static(pathToStaticFiles));


//Creating Routes
app.get ('', (req, res) => {
    res.send('The root route');
});
app.get ('/about', (req,res) =>{
    res.send('The about route');
});
app.get ('/contact', (req,res) =>{
    res.send('The contact route');
});

//Default Route
app.get ('*', (req,res) =>{
    res.send('Page not found');
});

//Setting up port for the application
app.listen(3000, () =>{
    console.log('Listenig to port 3000');
});
