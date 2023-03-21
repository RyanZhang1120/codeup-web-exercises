// PROMISES

// 3 states of a promise:
// - pending
// - resolved
// - rejected

// promises represented as objects

// asynchronous programming (vs synchronous)
//

// // promise to get data from an API
//
// var myName = "laura";
//
// console.log(myName);
//
// console.log(2 + 4);


// FETCH API
// fetch('string representating the url', ) -> okay we're starting a promise/request
// .then()
// -> chained onto the fetch request
// -> accepts a function as an argument
// -> its param is the result of the fetch request
// .catch()

// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error.message));



// fetch('url', {headers})
//     .then(function(resultFromFetch){
//         console.log(resultFromFetch)
//     })


// // how to actually get the data back
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.map(user => {
//             console.log(`your username is: ${user.login}`)
//         })
//     })
//     .catch(error => console.error(error.message));




// let users = fetch('https://api.github.com/users')
// console.log(users);
// users.map(user => {
//     console.log(`your username is: ${user.login}`)
// })


// // how to actually get the data back
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.map(user => {
//             console.log(`your username is: ${user.login}`)
//         })
//     })
//     .catch(error => console.error(error.message));


// Promise.resolve('one')
//     .then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// }).catch(err => console.log(err.message));

// fetch('https://api.github.com/users')
//     .then( response => {
//     response.json().then( users => {
//         users.forEach( userObj  => {
//             // do something with the username login
//             console.log(userObj);
//         });
//     });
// });


// promises return: {}
// its status!

// const myPromise = new Promise((resolve, reject) => {
//     let randomNum = Math.random();
//     if (randomNum > 0.5) {
//         console.log("random num: ", randomNum);
//         resolve();
//     } else {
//         console.log("random num: ", randomNum);
//         reject();
//     }
// });
//
// myPromise.then(() => console.log('woohoo! resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// const myPromise = new Promise((resolve, reject) => {
//     let result = confirm(
//         "do you want this to be rejected or failed"
//     );
//     result ? resolve() : reject(); // ternary
//
//
//     // if (randomNum > 0.5) {
//     //     console.log("random num: ", randomNum);
//     //     resolve();
//     // } else {
//     //     console.log("random num: ", randomNum);
//     //     reject();
//     // }
// });
//
// myPromise.then(() => console.log('woohoo! resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

fetch('https://api.github.com/users/RyanZhang1120/events/public', {headers: {'Authorization': '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'}})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`Your last commit is: ${data[0].payload.commits[0].message}`)
        // data.map(user => {
        //     console.log(`your username is: ${user.login}`)
        // })
    })
    .catch(error => console.error(error.message));

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve();
            } else {
                reject();
            }
        }, time);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));














