import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


localStorage.setItem('human','maciek');

console.log(localStorage.getItem('human'));







console.log(JSON.stringify({name:'Mateusz'}));



localStorage.setItem('nowyKlucz',JSON.stringify({name:'maciek'}));

console.log(localStorage.getItem('nowyKlucz'));

const myResult = localStorage.getItem('nowyKlucz');

console.log(JSON.parse(myResult));

const myNewObject = JSON.parse(myResult);

myNewObject.newProperty='hi';

console.log(myNewObject);

// const entry = localStorage.getItem('entry');
// let result='';
// if(entry){
//     console.log(`wartość entry ${entry}`)
//     result=entry;
// }



// const entryInput = document.querySelector('form__item');
// entryInput.value=result;



// const button = document.querySelector('save');
// button.addEventListener('click',()=>{
//     localStorage.setItem('entry',entryInput.value);
// })

// console.log(entryInput);