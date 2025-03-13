// Resource: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// Exercise 1: Display current day and time

let date = new Date();
let weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('Today is: ', weekDay[date.getDay() - 1]);
console.log('Current time is: ', date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());

// Exercise 2: Write a JS program to print the current window content

function print_page() {
    window.print();
}

// Exercise 3: Get current date in various formats

let today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1; // getMonth method starts at 0 !
let year = today.getFullYear();

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

today = day + '-' + month + '-' + year
console.log(today)

today = day + '/' + month + '/' + year
console.log(today)

today = month + '-' + day + '-' + year
console.log(today)

today = month + '/' + day + '/' + year
console.log(today)