"use strict";

// 2.
function showMultiplicationTable(input) {
    for(var i = 1; i <= 10; i++ ) {
        console.log(input + ' * ' + i + ' = ' + input * i);
    }
}
showMultiplicationTable(7);

// 3.
function checkEven(number) {
    if (number % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
for(var i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 200) + 20;
    console.log(random + ' is ' + checkEven(random));
}

// 4.
for(var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i));
}

for(var i = 1; i < 10; i++) {
    var iString = "";
    for(var n = 1; n <= i; n++) {
        iString += i;
    }
    console.log(iString);
}

// 5.
for(i = 20; i > 0; i--) {
    console.log(i * 5);
}

