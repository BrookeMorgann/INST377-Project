function injectHTML(list) {
    const target = document.querySelector('.people_list');
    target.innerHTML = '';
    const arr = Array.from(list);
    arr.forEach(item => {
        const str = `<table>${item.description}</table>`;
        target.innerHTML += str})
    console.log('fired injectHTML')
    console.log(arr)

}
  
async function mainEvent() { 
    const mainForm = document.querySelector('.main_form');
    const loadDataButton = document.querySelector('#data_load');
    const generateListButton = document.querySelector('#generate');
  
    let currentList = []; // this is "scoped" to the main event function
    
    loadDataButton.addEventListener('click', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
      
        console.log('load data'); 

        let results = await fetch('https://api.fbi.gov/wanted/v1/list');
  
      // This changes the response from the GET into data we can use - an "object"
        currentList = await results.json();

        storedData = JSON.stringify(currentList);
        parsedData = JSON.parse(storedData);

        console.log('PD', parsedData)
      
    });

    generateListButton.addEventListener('click', (event) => {
        console.log('generate list');
        data = parsedData.items[1];
        console.log(data);
        injectHTML(data);
    })

}
document.addEventListener('DOMContentLoaded', async () => mainEvent());