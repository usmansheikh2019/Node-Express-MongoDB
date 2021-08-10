function fetchDefination() {
    const textBox = document.getElementById('txtWord');
    const word = textBox.value; 
    textBox.value = ''
    document.getElementById('displayWord').textContent = ''
    document.getElementById('displayDefination').textContent = 'Fetching....'
    const url = `http://localhost:3000/search/?word=${word}`;
    fetch(url).then( (response) => {
        return response.json()
    }).then( (data) => {
        if(data.error){
            document.getElementById('displayDefination').innerHTML = '<span style="font-weight: 900">Error occurred: </span>' + data.error;
            console.log(data.error);
        }else{
            document.getElementById('displayWord').innerHTML = '<span style="font-weight: 900">Word: </span>' + data.word;
            document.getElementById('displayDefination').innerHTML = '<span style="font-weight: 900">Defination: </span>' + data.definition
            console.log(data);
        }
    }).catch( (e) => {
        document.getElementById('displayDefination').innerHTML = '<span style="font-weight: 900">Error occurred: </span>' + e;
        console.log('Error occurred: ',e);
    })
}