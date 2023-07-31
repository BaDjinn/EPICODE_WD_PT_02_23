// console.log('inizio del programma');

// setTimeout(()=>{console.log('inside setTimeout')},2000);

// saluta('Antonio');

// console.log('Programma in esecuzione');

// console.log('FINE PROGRAMMA');

// const saluta = (param)=>{ console.log(`CIAO A ${param}`) }


/*AJAX*/


// const xhr = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts'

// console.log('Something is working')

// xhr.onload = function(){
//     if (xhr.status === 200){
//         console.log(xhr)
//         const response = JSON.parse(xhr.responseText)
//         console.log(response);
//     } else {console.log('Something is wrong...')}
// }

// xhr.onerror = ()=>{console.log('Errore di rete3')}

// xhr.open("GET",url);
// xhr.send();


/*
    const makeAjaxCall = (url, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                callback(null, xhr.response);
            } else {
                callback('Errore durante la richiesta');
            }
        };
        xhr.onerror = () => { callback('Errore di rete'); };
        xhr.send();
    };
    
    function getUserDetails(userId, clbk) {
        makeAjaxCall(`https://jsonplaceholder.typicode.com/users/${userId}`, clbk);
    }
    
    function getUserPost(userId, clbk) {
        makeAjaxCall(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, clbk);
    }
    
    console.log('Inizio del programma');
    
    getUserDetails(1, function (err, userDetails) {
        if (err) console.log(err);
        else {
            const user = JSON.parse(userDetails);
            getUserPost(user.id, function (err, userPosts) {
                if (err) console.log('Errore', err);
                else {
                    const allUserPosts = JSON.parse(userPosts);
                    console.log('Post dell\'utente: ', allUserPosts);
                }
                console.log('FINE');
            });
        }
    });
    
    console.log('FINE PROGRAMMA');
*/
/*--------------------------PROMISES--------------*/

const My_promise = new Promise(function(res,rej){

    setTimeout(()=>{
        const randomValue = Math.random();
        if (randomValue>0.5) res(randomValue);
        else rej(new Error('Valore troppo basso'));
    },1000)
});

my_promise
.then(res=> console.log('res: ',res))
.catch(err=> console.log('err: ', err))


/*------------------------------MULTIPLE PROMISES---------------- */

const makeRequest=(url2) => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url2);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error('Errore durante la richiesta'));
            }
        };
        xhr.onerror = () => { reject(new Error('Errore di rete')); };
        xhr.send();
    })
}
makeRequest('https://jsonplaceholder.typicode.com/comments').then(
    (response)=>{
        const res1 = JSON.parse(response)
    }
).catch()