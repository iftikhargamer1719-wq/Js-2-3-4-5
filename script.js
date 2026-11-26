// =====================================
// CHAPTER 2 - VARIABLES FOR STRINGS
// =====================================

// Q1. Declare a variable called username.
var username;

// Q2. Store your full name.
var myName = "Iftikhar Zulfiqar";

// Q3. Display Hello World in an alert.
var message = "Hello World";
alert(message);

// Q4. Student bio data in separate alert boxes.
var studentName = "Jhone Doe";
var studentAge = "15 years old";
var course = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(course);

// Q5. Display the pizza pattern in one alert.
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Q6. Email message using string concatenation.
var email = "example@example.com";
alert("My email address is " + email);

// Q7. Book message.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Q8. Display text in the browser.
document.write("<p>Yah! I can write HTML content through JavaScript</p>");

// Q9. Store a decorative string and show it in alert and browser.
var specialMessage = "▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬";
alert(specialMessage);
document.write("<p>" + specialMessage + "</p>");


// =====================================
// CHAPTER 3 - VARIABLES FOR NUMBERS
// =====================================

// Q1. Store age and show it in an alert.
var age = 15;
alert("I am " + age + " years old");

// Q2. Store number of website visits.
var visits = 14;
alert("You have visited this site " + visits + " times");

// Q3. Store birth year and show its data type.
var birthYear = 1990;
document.write("<p>My birth year is " + birthYear + "</p>");
document.write("<p>Data type of my declared variable is " + typeof birthYear + "</p>");

// Q4. Online clothing store order.
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write(
    "<p>" + visitorName + " ordered " + quantity + " " +
    productTitle + "(s) on XYZ Clothing store.</p>"
);


// =====================================
// CHAPTER 4 - VARIABLE NAMES
// =====================================

// Q1. Declare three variables in one statement.
var firstName, lastName, studentAge;

// Q2. Five legal variable names:
var userName;
var ageNumber;
var first_name;
var $price;
var user123;

// Five illegal examples (kept as comments because invalid
// variable names would stop the JavaScript file from running):
// var 123user;
// var first-name;
// var first name;
// var var;
// var user@name;

// Q3. Display the rules in the browser.
document.write("<h2>Rules for naming JS variables</h2>");
document.write("Variable names can only contain letters, numbers, $ and _.<br>");
document.write("Variable names must begin with a letter, $ or _.<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS keywords.<br>");


// =====================================
// CHAPTER 5 - MATH EXPRESSIONS
// =====================================

// Q1. Add two numbers and show the result.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("<h2>Chapter 5 - Math Expressions</h2>");
document.write("<h3>Q1 - Addition</h3>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Q2. Subtraction, multiplication, division and modulus.
var number1 = 10;
var number2 = 5;

var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;

document.write("<h3>Q2 - Math Operations</h3>");
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

// Q3. Mathematical expressions.
var number;

document.write("<h3>Q3 - Mathematical Expressions</h3>");
document.write("Value after variable declaration is " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br>");

// Q4. Calculate the cost of five movie tickets.
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("<h3>Q4 - Movie Tickets</h3>");
document.write(
    "Total cost to buy " + numberOfTickets +
    " tickets to a movie is " + totalCost + " PKR<br>"
);

// Q5. Display the multiplication table of 4.
var tableNumber = 4;

document.write("<h3>Q5 - Table of " + tableNumber + "</h3>");
document.write(tableNumber + " x 1 = " + (tableNumber * 1) + "<br>");
document.write(tableNumber + " x 2 = " + (tableNumber * 2) + "<br>");
document.write(tableNumber + " x 3 = " + (tableNumber * 3) + "<br>");
document.write(tableNumber + " x 4 = " + (tableNumber * 4) + "<br>");
document.write(tableNumber + " x 5 = " + (tableNumber * 5) + "<br>");
document.write(tableNumber + " x 6 = " + (tableNumber * 6) + "<br>");
document.write(tableNumber + " x 7 = " + (tableNumber * 7) + "<br>");
document.write(tableNumber + " x 8 = " + (tableNumber * 8) + "<br>");
document.write(tableNumber + " x 9 = " + (tableNumber * 9) + "<br>");
document.write(tableNumber + " x 10 = " + (tableNumber * 10) + "<br>");

// Q6. Temperature converter.
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write("<h3>Q6 - Temperature Converter</h3>");
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br>");

// Note: The screenshot only shows the beginning of Q7.
// Its full instructions were not visible, so it is not added here.
