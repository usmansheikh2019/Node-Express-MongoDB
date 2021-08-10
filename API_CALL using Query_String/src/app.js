const hbs     = require('hbs');
const express = require('express');
const path    = require('path');
const request = require('request');

const app = express();
const pathToViewsFolder    = path.join(__dirname,'../templates/views');
const pathToPartialsFolder = path.join(__dirname,'../templates/partials');
app.set('view engine', 'hbs' );
app.set('views', pathToViewsFolder);
hbs.registerPartials(pathToPartialsFolder);
var defination;
app.get('/',(req,res) =>{
    const word = req.query.word;
    if(!word){
        res.render('index',{
            def: 'No word provided'
        });
    }
    var promise = new Promise((resolve,reject)=>{
        
        const options = {
            url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`,
        headers: {
            Accept: "application/json",
            app_id : "192f2229",
            app_key : "e0e588c57c5c99d4ac5b1634c7c7229f"
        },
            json: true
        }
        const callback = (error,response) =>{
            console.log('Error:', error);
        const responseBody =  response.body;
         defination  = ((response) && (response.statusCode === 200))?responseBody.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
        : 'Word not found in the Dictionary';
        }
        request(options,callback);
        resolve(defination)
    })
    .then((defination)=>{
        res.render('index',{
            def: defination
        })
    })


});
app.listen(3000 ,()=> {
    console.log('Listening to PORT 3000');
});

// app.get('/',(req,res) =>{
//     res.render('index',{
//         def: defination
//     });
// });

