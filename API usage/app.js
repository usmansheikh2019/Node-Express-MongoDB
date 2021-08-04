const request = require ('request');
const word = `coffee`;
const option = {
    url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/" + word,
    headers :{
        Accept: "application/json",
        app_id: "192f2229",
        app_key: "e0e588c57c5c99d4ac5b1634c7c7229f"
    },
    json: true
}
const callback = (error,response) => {
    console.log('Error',error);
    const data = response.body
    //const parsedData = JSON.parse(data)
    //const isPresent = parsedData.hasOwnProperty('definitions');
    //console.log(parsedData);
    //console.log(isPresent);
    console.log(`Defination 1 :`,data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
    console.log(`Defination 2 :`,data.results[0].lexicalEntries[0].entries[0].senses[1].definitions[0]);
    console.log(response.body);
}
request(option,callback)