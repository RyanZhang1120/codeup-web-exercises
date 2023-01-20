'use strict';

alert('Hello from the external javascript');
alert('welcome to my Website');
var color = prompt('What is you favorite color?');
alert('Great, ' + color + " is my favorite color too!");
//1. creat the days movie rented
var little_mermaid = 3;
var brother_bear = 5;
var hercules = 1;
//then creat the rent price each day
var price = 3;
//creat the total price
var total_price = (little_mermaid + brother_bear + hercules) * price;
//get the total price and alert to users
alert('For the question 1, the toal price is: ' +'$' + total_price);

//2. creat the pay amount from each company
var google = 400;
var amazon = 380;
var facebook = 350;
//creat working hours
var wh_google = 6;
var wh_amazon = 4;
var wh_facebook = 10;
//total payment
var payment = google * wh_google + amazon * wh_amazon + facebook * wh_facebook;
//get the payment and alert to users
alert('For the question 2, the payment is: ' +'$' + payment);

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
