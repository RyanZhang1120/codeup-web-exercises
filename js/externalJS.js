'use strict';

alert('Hello from the external javascript');
alert('welcome to my Website');
var color = prompt('What is you favorite color?');
alert('Great, ' + color + " is my favorite color too!");
//1. creat the days movie rented
var littleMermaidDays = prompt("How long do you rent the little mermaid?");

var brotherBearDays = prompt("Nice - how many days would you like to rent brother bear?");

var herculesDays = prompt("Finally, Hercules - how many days may I rent that to you?");

var dailyRate = 3;

var total_pay = (Number(littleMermaidDays) + Number(brotherBearDays) + Number(herculesDays)) * dailyRate;

alert((littleMermaidDays * dailyRate) + " is how much for Little Mermaid. " + (brotherBearDays * dailyRate) +
    " is how much you owe for brother bear. Finally, you will be charged " + (herculesDays * dailyRate) +
    " for hercules, and you will pay " + total_pay );

//2. creat the pay amount from each company
var google = prompt('how much does google pay hourly?');
var wh_google = prompt('how many have you worked for google?');
var amazon = prompt('how much does amazon pay hourly?');
var wh_amazon = prompt('how many have you worked for amazon?');
var facebook = prompt('how much does facebook pay hourly?');
var wh_facebook = prompt('how many have you worked for facebook?');
//total payment
var payment = google * wh_google + amazon * wh_amazon + facebook * wh_facebook;
//get the payment and alert to users
alert('google will pay $' + google * wh_google + ' amazon will pay $' + amazon * wh_amazon + ', and facebook will pay $'
+ facebook * wh_facebook + '. total payment will be $' + payment);

//3. check if the class is full
var fullclass = confirm('Is the class full?');
//check student's schedule
var schedule = confirm('Is the student\'s schedule conflict with the class?');
//alert the user if she can be enrolled in the class
var enroll = !fullclass && !schedule;
if (enroll) {
    alert('For the question 3, she can be enrolled in the class')
} else{
    alert('For the question 3, she can\'t be enrolled in the class')
};

//4. check if the person buys more than 2 items
var itemsbuy = prompt("how many items bought?");
//check if the offer expired
var expired = confirm('Is the offer expired');
//check if the person is a premium member
var premium = confirm('Is the person a premium member?')
//alert if offer can be applied
var offer = itemsbuy > 2 && !expired || premium && !expired;
if (offer) {
    alert('For the question 4, the offer can be applied')
} else{
    alert('For the question 4, sorry, the offer can\'t be applied')
};
