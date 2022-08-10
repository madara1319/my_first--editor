import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const entry = localStorage.getItem('entry');
let result='';
if(entry){
    console.log(`wartość entry ${entry}`)
    result=entry;
}



const entryInput = document.querySelector('form__item');
entryInput.value=result;



const button = document.querySelector('save');
button.addEventListener('click',()=>{
    localStorage.setItem('entry',entryInput.value);
})

console.log(entryInput);