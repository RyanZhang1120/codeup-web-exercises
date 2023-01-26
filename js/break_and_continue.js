"use strict";

// Break and continue
function checkOdd(number) {
    if(number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
do {
    var user = prompt('please enter an odd number between 1 and 50');
    if (checkOdd(user)) {
        break;
    }
} while(checkOdd(user) == false)

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