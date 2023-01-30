"use strict";

// Break and continue
function checkOdd(number) {
    if(number % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
//&& (user >= 1) && (user <= 50)
var user;
while(true){
    user = Number(prompt('please enter an odd number between 1 and 50'));
    if (checkOdd(user) && user >= 1 && user <= 50) {
        break;
    }
}

console.log('Number to skip is: ' + user);
console.log('')
for(var i = 1; i <= 50; i++) {
    if (checkOdd(i) && (i != user)) {
        console.log('Here is an odd number:' + i);
    } else if(i == user){
        console.log('Yikes! Skipping number:' + i);
    } else {
        continue;
    }
}