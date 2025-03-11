// Resource: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// Exercise 1: Display current day and time

const date = new Date();
const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('Today is: ', weekDay[date.getDay() - 1]);
console.log('Current time is: ', date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());