

// async function mainEvent() {
    // const mainForm = document.querySelector('.main_form');
    // const loadDataButton = document.querySelector('#data_load');



    // loadDataButton.addEventListener('click', async (submitEvent) => { 
        
        // console.log('Loading data');

        // const results = await fetch('https://api.fbi.gov/wanted/v1/list');

    // This changes the response from the GET into data we can use - an "object"
    
//    });

// }

// document.addEventListener('DOMContentLoaded', async () => mainEvent());


async function mainEvent() { // the async keyword means we can make API requests
    const mainForm = document.querySelector('.main_form');
    // const filterButton = document.querySelector('.filter_button');
   
  
    let currentList = []; 
    
    mainForm.addEventListener('submit', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
      
      submitEvent.preventDefault(); 
      
      console.log('form submission'); 
  
      
  
      
      const results = await fetch('https://api.fbi.gov/wanted/v1/list');
  
      currentList = await results.json();
  
      
      console.table(currentList); 
    });
  
    // filterButton.addEventListener('click', (event) => {
    //     console.log('clicked filterButton');
  
    //     const formData = new FormData(mainForm);
    //     const formProps = Object.fromEntries(formData);
  
    //     console.log(formProps);
    //     const newList = filterList(currentList, formProps.resto);
  
    //     console.log(newList);
    // })
  
  }
  
 
  document.addEventListener('DOMContentLoaded', async () => mainEvent());