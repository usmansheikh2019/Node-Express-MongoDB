const express = require('express');
const path    = require('path');
const hbs     = require('hbs');
const app = express();
const viewFolderPath = path.join(__dirname,'../templates/views');
const partialFolder  = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialFolder);
app.set('views',viewFolderPath);
app.set('view engine', 'hbs');
app.get('/',(req,res) =>{
    console.log(req.query);
    res.render('index',{
        name: req.query.myName,
        age: req.query.myAge
    });
});
app.get('/about', (req, res) =>{
    res.render('about');
});
app.get('*',(req,res) =>{
    res.send('Page not found!');
});
app.listen(3000,() =>{
    console.log('Listening to port 3000');
});

