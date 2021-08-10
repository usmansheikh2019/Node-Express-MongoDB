const fetchDefination = () => {
    const textBox = document.getElementById('theWord');
    const word    = textBox.value
    const url     = `https://localhost:3000/?search=${word}`
    
}