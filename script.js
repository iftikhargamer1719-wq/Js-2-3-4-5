
// CHAPTER 2 - VARIABLES FOR STRINGS

var output = document.getElementById("output");

var username;
var myName = "Iftikhar Zulfiqar";

var message = "Hello World";
alert(message);

var studentName = "Jhone Doe";
var studentAge = "15 years old";
var course = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(course);

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

var email = "example@example.com";
alert("My email address is " + email);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

output.innerHTML += "<p>Yah! I can write HTML content through JavaScript</p>";

var specialMessage = "▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬";
alert(specialMessage);
output.innerHTML += "<p>" + specialMessage + "</p>";


// CHAPTER 3 - VARIABLES FOR NUMBERS

var age = 15;
alert("I am " + age + " years old");

var visits = 14;
alert("You have visited this site " + visits + " times");

var birthYear = 1990;

output.innerHTML += "<p>My birth year is " + birthYear + "</p>";
output.innerHTML += "<p>Data type of my declared variable is " + typeof birthYear + "</p>";

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

output.innerHTML += "<p>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</p>";


// CHAPTER 4 - VARIABLE NAMES

var firstName, lastName, studentAge;

var userName;
var ageNumber;
var first_name;
var $price;
var user123;

// Illegal variable names (comments only)
// var 123user;
// var first-name;
// var first name;
// var var;
// var user@name;

output.innerHTML += "<h2>Rules for naming JS variables</h2>";

output.innerHTML += "Variable names can only contain letters, numbers, $ and _.<br>";
output.innerHTML += "Variable names must begin with a letter, $ or _.<br>";
output.innerHTML += "Variable names are case sensitive.<br>";
output.innerHTML += "Variable names should not be JS keywords.<br>";


// CHAPTER 5 - MATH EXPRESSIONS

output.innerHTML += "<h2>Chapter 5 - Math Expressions</h2>";


// Q1 - Addition

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

output.innerHTML += "<h3>Q1 - Addition</h3>";
output.innerHTML += "Sum of " + num1 + " and " + num2 + " is " + sum + "<br>";


// Q2 - Math Operations

var number1 = 10;
var number2 = 5;

var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;

output.innerHTML += "<h3>Q2 - Math Operations</h3>";
output.innerHTML += "Subtraction: " + subtraction + "<br>";
output.innerHTML += "Multiplication: " + multiplication + "<br>";
output.innerHTML += "Division: " + division + "<br>";
output.innerHTML += "Modulus: " + modulus + "<br>";


// Q3 - Mathematical Expressions

var number;

output.innerHTML += "<h3>Q3 - Mathematical Expressions</h3>";
output.innerHTML += "Value after variable declaration is " + number + "<br>";

number = 5;
output.innerHTML += "Initial value: " + number + "<br>";

number++;
output.innerHTML += "Value after increment is: " + number + "<br>";

number = number + 7;
output.innerHTML += "Value after addition is: " + number + "<br>";

number--;
output.innerHTML += "Value after decrement is: " + number + "<br>";

var remainder = number % 3;
output.innerHTML += "The remainder is: " + remainder + "<br>";


// Q4 - Movie Tickets

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

output.innerHTML += "<h3>Q4 - Movie Tickets</h3>";

output.innerHTML += "Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR<br>";


// Q5 - Multiplication Table

var tableNumber = 4;

output.innerHTML += "<h3>Q5 - Table of " + tableNumber + "</h3>";

for (var i = 1; i <= 10; i++) {
    output.innerHTML += tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>";
}


// Q6 - Temperature Converter

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

output.innerHTML += "<h3>Q6 - Temperature Converter</h3>";

output.innerHTML += celsius + "°C is " + fahrenheit + "°F<br>";

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

output.innerHTML += fahrenheit2 + "°F is " + celsius2 + "°C<br>";
