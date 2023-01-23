"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor() {
    var color = prompt('Input a color')
    if (color === 'red') {
        console.log('red is the color of blood');
    } else if (color === 'blue') {
        console.log('blue is the color of sky');
    } else {
        console.log('I don\'t know anything about ' + color );
    }
}

analyzeColor();
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function analyzerandomColor() {
    console.log('random color is: ' + randomColor);
    if (randomColor === 'red') {
        console.log('red is the color of blood');
    } else if (randomColor === 'blue') {
        console.log('blue is the color of sky');
    } else {
        console.log('I don\'t know anything about ' + randomColor );
    }
}

analyzerandomColor();
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
switch (randomColor) {
    case 'red':
        console.log('red is the color of blood');
        break;
    case 'blue':
        console.log('blue is the color of sky');
        break;
    default:
        console.log('I don\'t know anything about ' + randomColor );
        break;
}
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(lucky_number, amount) {
    if (lucky_number === 0) {
        console.log(amount);
    } else if(lucky_number === 1) {
        console.log(amount * 0.9);
    } else if(lucky_number === 2) {
        console.log(amount * 0.75);
    } else if(lucky_number === 3) {
        console.log(amount * 0.65);
    } else if(lucky_number === 4) {
        console.log(amount * 0.5);
    } else if(lucky_number === 5) {
        console.log(0);
    } else {
        console.log('no such a lucky number');
    }
}
calculateTotal(4, 100);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt('How much is the bill?')
function calculateTotal(lucky_number, amount) {
    console.log('Luck number is ' + lucky_number);
    console.log('Total bill is ' + amount)
    if (lucky_number === 0) {
        console.log(amount);
    } else if(lucky_number === 1) {
        console.log(amount * 0.9);
    } else if(lucky_number === 2) {
        console.log(amount * 0.75);
    } else if(lucky_number === 3) {
        console.log(amount * 0.65);
    } else if(lucky_number === 4) {
        console.log(amount * 0.5);
    } else  {
        console.log(0);
    }
}
calculateTotal(luckyNumber, totalBill);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function checkodd (a) {
    if (a % 2 ===0) {
        alert('the number is an even number');
    } else {
        alert('the number is an odd number');
    }
}

function plus100 (b) {
    alert('the number plus 100 is ' + (Number(b) + 100));
}

function checkpositive (c) {
    if (c > 0) {
        alert('the number is positive');
    } else if (c < 0) {
        alert('the number is negative');
    } else {
        alert('the number is 0')
    }
}
function checkNumber() {
    if (confirm('if you would like to enter a number?')) {
        var number = prompt('what\'s your number?')
        checkodd(number);
        plus100(number);
        checkpositive(number);
    }
    else {
        console.log('Okay, number game is no fun')
    }
}
checkNumber();
