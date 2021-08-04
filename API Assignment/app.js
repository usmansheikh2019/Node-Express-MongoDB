const request = require('request');
let ipAddress;
const option0 = {
    url: `https://api.ipgeolocation.io/getip`,
    header:{
        app_key: `9e32324b21b64486aa0ce7b464e09b88` 
    },
    json: true
}
const callback0 = (error,response) => {
    if (response){
        console.log(`IP_Address fetched successfully !`);
        ipAddress = response.body.ip;
        console.log(ipAddress);
    }
    else{
        console.log(`Error: ${error}\nCannot fetch the IP_Address !`);
    }
}
request(option0,callback0);
const option1 = {
    url: `https://api.ipgeolocation.io/ipgeo?apiKey=9e32324b21b64486aa0ce7b464e09b88&ip=`+ipAddress,
    json: true
}
const callback1 = (error,response) => {
    console.log("Error: ",error);
    console.log("Status code: ", response && response.statusCode);
    console.log("Response body: ", response && response.body);
}
request(option1,callback1);