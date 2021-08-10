const hbs     = require('hbs');
const express = require('express');
const path    = require('path');
const request = require('request');
const app = express();
const pathToViewsFolder = path.join(__dirname,'../templates/views');
app.set('view engine', 'hbs')
app.set('views', pathToViewsFolder)
const pathToPublicFolder = path.join(__dirname,'../public');
app.use(express.static(pathToPublicFolder));

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/search',(req,res) => {
    const { word }  = req.query;
    if(!word){
        return res.send({
            error: 'Word not provided'
        })
    }
    //API Section
    const options = {
        url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`,
        headers: {
            accept: "application/json",
            app_id : "192f2229",
            app_key : "e0e588c57c5c99d4ac5b1634c7c7229f"
        },
        json: true
    }
    const callback = (error, response) => {
        console.log('Error: ',error);
        console.log('Status Code: ',response.statusCode);
        const definition = (response) && (response.statusCode === 200)? response.body.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0].toString()
        : 'Word not found in the Dictionary';
        const responseObj = {
            word,
            error,
            definition,
        }
        return res.send(responseObj)

    }
    request(options,callback);

})
app.listen(3000 , ()=> {
    console.log('Listening to PORT 3000');
});