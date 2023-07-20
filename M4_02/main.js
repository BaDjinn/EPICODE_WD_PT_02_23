// console.log('inizio del programma');

// setTimeout(()=>{console.log('inside setTimeout')},2000);

// saluta('Antonio');

// console.log('Programma in esecuzione');

// console.log('FINE PROGRAMMA');

// const saluta = (param)=>{ console.log(`CIAO A ${param}`) }


/*AJAX*/
console.log('inizio del programma');

const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts'

console.log('Something is working')

xhr.onload = function(){
    if (xhr.status === 200){
        console.log(xhr)
        const response = JSON.parse(xhr.responseText)
        console.log(response);
    } else {console.log('Something is wrong...')}
}

xhr.onerror = ()=>{console.log('Errore di rete3')}

xhr.open("GET",url);
xhr.send();
console.log('FINE PROGRAMMA');