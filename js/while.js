"use strict";
//while loop
var i = 1;
while(i <= 16) {
    console.log(Math.pow(2, i));
    i++
}
// Ice cream game
var allCones = Math.floor(Math.random() * 50) + 50;
console.log('I have ' + allCones + ' cones to tell')
var i = 0;
var totalSell = 0;
do{
    var sell = Math.floor(Math.random() * 5) + 1;
    totalSell = totalSell + sell;
    i++
    if (totalSell < allCones) {
        console.log(sell + ' canes sold...');
    } else if(totalSell > allCones) {
        console.log('Cannot sell you ' + sell + ' cones I only have ' + (sell - totalSell + allCones) + '...' );
        break;
    } else {
        console.log('Yay! I sold them all');
        break;
    }
} while(i < 100)