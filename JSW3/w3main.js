// innerHTML
document.getElementById('demo_001').innerHTML = Date();
document.getElementById("inner_HTML").innerHTML = 5 + 6;


document.getElementById("demo_1").innerHTML = "My First Practece JS";
function myFunction_2() {
	document.getElementById("demo_2").innerHTML = "Paragraph Change Practece JS";

}
// p-3
var x, y, z;
 x = 5;
 y = 7;
 z = x + y;

document.getElementById("demo_3").innerHTML = "This value of z is "+z+"." ;

var a, b, c;
a = 8;
b = 7;
c = a * b;
document.getElementById("demo_3_1").innerHTML = c;

var a, b, c;
a = 20; b = 12; c = a - b;
document.getElementById("demo_3_2").innerHTML = c;

function myFunction_3() {
	document.getElementById("demo_3_3").innerHTML = "Hey guys";
	document.getElementById("demo_3_4").innerHTML = "How are You";
	
}
// P = 4
// JS Syntax
document.getElementById("demo_4").innerHTML = 10.50;

document.getElementById('demo_4_1').innerHTML = "This is double <b>quote</b> in js";
document.getElementById('demo_4_2').innerHTML = 'This is single <b>quote</b> in js';

document.getElementById('demo_4_3').innerHTML = 'This is a Strings, js use single quote';
document.getElementById('demo_4_4').innerHTML = "This is a Strings, js use double quote";

var x;
x=7;
document.getElementById('demo_4_5').innerHTML = x;

document.getElementById('demo_4_6').innerHTML = (5+7)*5;
//start
var x = 3;
var y = 7;
var z = x+y;

var a = 4;
var b = z*a;

var d = b/a;

var e = 48;
var f = e%d;

document.getElementById('demo_4_7').innerHTML = z;
document.getElementById('demo_4_8').innerHTML = b;
document.getElementById('demo_4_9').innerHTML = d;
document.getElementById('demo_4_10').innerHTML = f;
// end

var x, y;
x = 8;
y = 7;
document.getElementById('demo_4_11').innerHTML = x + y;

// JavaScript and Camel Case
var hyPhens = "first-name, last-name, master-card, inter-city.";
document.getElementById('demo_4_12').innerHTML =hyPhens;

var underScore = "first_name, last_name, master_card, inter_city.";
document.getElementById('demo_4_13').innerHTML =underScore;

var upperCamelCase = "Ex: FirstName, LastName, MasterCard, InterCity.";
document.getElementById('demo_4_14').innerHTML = upperCamelCase;

var lowerCamelCase = "firstName, lastName, masterCard, interCity.";
document.getElementById('demo_4_15').innerHTML = lowerCamelCase;

// start-p-5
//Variables
var x = 9;
var y = 7;

var z = x+y;
document.getElementById("demo_5").innerHTML =
"The value of z is: " + z ;

// Much Like Algebra
var price1 = 8;
var price2 = 6;
var total = price1 + price2;
document.getElementById('demo_5_1').innerHTML = "The total is: " + total;

// Data Types
var pi = 3.14;
var person = "Atiqur Rahman";
var answer= 'Yes I am!';
document.getElementById('demo_5_2').innerHTML = 
pi + "<br/>" + person + "<br/>" + answer;

// One Statement, Many Variables
var naMe = "Atiqur Rahman", carName = "volvo", price = 200;
document.getElementById('demo_5_3').innerHTML =
naMe + "<br>" + carName + "<br>"+ price;

// span multiple lines:
var Name = "Masum Billah",
Carname = "volvo",
fixPrice = 250;

document.getElementById('demo_5_4').innerHTML =
Name + "<br>"+ Carname + "<br>"+ fixPrice;

// Arithmetic
var x = 5 + 5 + 4;
document.getElementById('demo_5_5').innerHTML = x;

var y = "Atiq" + " " + "Masum";
document.getElementById('demo_5_6').innerHTML = y;

var x = "5" + 2 + 3;
document.getElementById('demo_5_7').innerHTML = x;

var z = 2 + 3 + "5";
document.getElementById('demo_5_8').innerHTML = z;

// JavaScript Operators
//The += Operator
var x = 20;
x += 5;  // x = x + 5
document.getElementById('demo_6').innerHTML = x;

var txt1 = "I want to learn ";
txt1 += "a web development";
document.getElementById('demo_6_1').innerHTML = txt1;
//number and a string
var x = 8+6;
var y = "8" + 5;
var z = "Hello " + 5;

document.getElementById('demo_6_2').innerHTML = 
x + "<br>" + y + "<br>" + z;

// JavaScript Arithmetic
// Adding
var x = 4;
var y = 3;
var z = x+y;
document.getElementById('demo_7').innerHTML = z;

// Subtracting
var x = 10;
var y = 4;
var z = x - y;
document.getElementById('demo_7_1').innerHTML =z;

// Multiplying
var p = "The multiplication operator (*) multiplies numbers.";
var x = 10;
var y = 3;
var z = x * y;
document.getElementById('demo_7_2').innerHTML =
p + "<br/>" + z;

// Dividing
var p = "The division operator (/) 20/5 divides numbers.";
var x = 20;
var y = 5;
var z = x / y;
document.getElementById('demo_7_3').innerHTML =
p + "<br/>" + z;

// Remainder
var a = 30;
var b = 4;
var c = a % b;
document.getElementById('demo_7_4').innerHTML = c;

// Incremeting
var p = "The increment operator (++) increments numbers.";
var a = 9;
a ++;
var b = a;
document.getElementById('deom_7_5').innerHTML =
p + "<br/>" + "9 increments is " + b;

//Decrementing
var p = "The decrement operator (--) decrements numbers.";
var a = 10;
a --;
var b = a;
document.getElementById('demo_7_6').innerHTML = 
p + "<br/>" + "10 Decrementing is " + b;

// Exponentiation
var x = 5;
x **= 2;
document.getElementById('demo_7_7').innerHTML =
"5 Exponentiation (5x5) is " + x;

// Math.pow()
var x = 6;
y = Math.pow(x,2);
document.getElementById('demo_7_8').innerHTML =
"6 Math.pow is " + y;

// Operanto precedence
var p = "Multiplication- 100+50*3 = 100+(50*3) adding ";
var x = 100 + 50 * 3;
document.getElementById('demo_7_9').innerHTML =
p + "<br/>"+ x;

var p = "Multiplication- 100+50*3 = (100+50)*3 adding ";
var x = (100+50) * 3;
document.getElementById('demo_7_10').innerHTML =
p + "<br>" + x;
// End p-7

// start p -8
// +=
var x = 12;
x += 8;
document.getElementById('demo_8').innerHTML = 
"var x = 12; <br/> x += 8; " + "<br/>"+ "Assignment is " + x;

// -=
var x = 12;
x -= 8;
document.getElementById('demo_8_1').innerHTML =
"var x = 12; <br/> x -= 8; " + "<br/>"+ "Assignment is " + x;

// *=
var x = 12;
x *= 8;
document.getElementById('demo_8_2').innerHTML =
"var x = 12; <br/> x *= 8; " + "<br/>"+ "Assignment is " + x;

// /=
var x = 12;
x /= 6;
document.getElementById('demo_8_3').innerHTML =
"var x = 12; <br/> x /= 6; " + "<br/>"+ "Assignment is " + x;

// %=
var x = 12;
x %= 5;
document.getElementById('demo_8_4').innerHTML =
"var x = 12; <br/> x %= 5; " + "<br/>"+ "Assignment is " + x;
// end -p-8
// JavaScript Data Types
document.getElementById('demo_9').innerHTML =
"var length = 16; " + "------> " + "It's a "+ "  Number" + "<br/>"+
"var lastName = 'Johnson' " + "------> " + "It's a "+ "  String" + "<br/>"+
"var x = {firstName:'John', lastName:'Doe'} " + "------> " + "It's a "+ "  Object";

//The Concept of Data Types
var x = 20 + 5 + " Years old Aitq";
document.getElementById('demo_9_1').innerHTML = 
"var x = 20 + 5 + 'Years old Aitq';" +"<br>" + x;
// But
var x = "Years old Aitq " + 20 + 5;
document.getElementById('demo_9_2').innerHTML = 
"var x = 'Years old Aitq' + 20 + 5;" +"<br>" + x;

//Other number system
var x = 123e5;
var y = 123e-5;
document.getElementById('demo_9_3').innerHTML =
"var x = 123e5;"+"<br>"+x+ "<br>"+"var y = 123e-5;"+"<br>"+y;

// Booleans
var x = 10;
var y = 8;
var z = 10;
document.getElementById('demo_9_4'). innerHTML =
(x == z) + "<br>"+ (x == y);

//JavaScript Arrays
var heIs = ["Atiq","Shehab","Sanaul"];
document.getElementById('demo_9_5').innerHTML = heIs[0];
document.getElementById('demo_9_6').innerHTML = heIs[1];
document.getElementById('demo_9_7').innerHTML = heIs[2];

// Object

var person = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
};
document.getElementById('demo_9_8').innerHTML =
person.firstName + " " + person.lastName + " is "+ person.age + " years old";

//JavaScript typeof
document.getElementById('demo_9_9').innerHTML =
' " " = '+ "typeof = " + typeof " " + "<br>"+
'"Atiq" = '+ "typeof = " + typeof "Atiq" + "<br>"+
' "Masum Billah" = '+ "typeof = " + typeof "Masum Billah" + "<br>"+
' "10" = '+ "typeof = " + typeof 10 + "<br>"+
' "(10+4)" = '+ "typeof = " + typeof 10 + "<br>"+
"Cars = "+ "typeof = " + typeof cars;

var cars = " ";
document.getElementById('demo_9_10').innerHTML =
"The typeof is " + typeof cars;

// Null
var x = undefined;
var y = null;
document.getElementById('demo_9_11').innerHTML =
typeof x + "<br>"+ typeof y+ "<br>"+
(null === x)+ "<br>"+ (null == x); 

// Or
document.getElementById('demo_9_12').innerHTML =
typeof undefined + "<br>"+
typeof null + "<br>"+
(null ===undefined)+"<br>"+
(null == undefined);
//End Data Types

//JavaScript Functions
function amarFunction(a, b) {
	return a * b;
}
document.getElementById('demo_10').innerHTML =
 amarFunction(5,2);

// Return value
var x = rvFunction (5 , 4);
function rvFunction(a, b) {
return a * b;
}
document.getElementById('demo_10_1').innerHTML = x;

//Fahrenheit to Celsius
function toCelsius(f) {
	return (5/9) * (f-32);
}
document.getElementById('demo_10_2').innerHTML = toCelsius(77);
// or
function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}
document.getElementById('demo_10_3').innerHTML = 
"The temperature is " + toCelsius(77) +" Celsius";

//JavaScript Objects
var car = {type: "Fiat", model: "500", color: "white"};
document.getElementById('demo_11').innerHTML = "The car type is " + car.type;
document.getElementById('demo_11_1').innerHTML = "The car model is " + car.model;
document.getElementById('demo_1_2').innerHTML = "The car color is " + car.color;

// Object Item and Property
var perSon = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
	eyeColar : "Black & white"
};
document.getElementById('demo_11_4').innerHTML =
perSon.firstName +" "+ perSon.lastName + "is "+ perSon.age + " years Old And His eye color is " + perSon.eyeColar;
// Or
document.getElementById('demo_11_5').innerHTML =
perSon["firstName"] +" "+ perSon["lastName"] + "is "+ perSon["age"] + " years Old And His eye color is " + perSon["eyeColar"];

//Accessing Object Methods

 var perSon = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
	fullName : function() {
		return this.firstName+ " "+ this.lastName + " is "+ this.age + " years old";
	}
};
document.getElementById('demo_11_6').innerHTML = perSon.fullName();

//JavaScript Events
function displayDate() {
	document.getElementById('demo_12_1').innerHTML = Date();
}
//End JS Events
//Start JS String
//String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo_13").innerHTML = txt.length;

var x = "I wan to be a \"Freelancer\" Do you know? I am trying It.";
document.getElementById('demo_13_1').innerHTML = x;
//Or
var x = "The character \\ is called backslash.";
document.getElementById("demo_13_2").innerHTML = x; 
//IndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo_14").innerHTML = pos;

//lastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("demo_14_1").innerHTML = pos;
//And
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("John");
document.getElementById("demo_14_2").innerHTML = pos;
//Slice = copy and cut
var str = "Apple, Banana, kiwi";
var result = str.slice(4, 18);
document.getElementById('demo_14_3').innerHTML = result;

var week = [
		"1 sat ", // 0
		"2 sun ", // 1
		"3 mon ", // 2
		"4 tues",// 3
		"5 wed ", // 4
		"6 thus ",// 5
		"7 fri"  // 6
];
var res = week.slice(3);
document.getElementById('demo_slice_14_4').innerHTML = res;

var week = [
		"1 sat ", // 0
		"2 sun ", // 1
		"3 mon ", // 2
		"4 tues ",// 3
		"5 wed ", // 4
		"6 thus ",// 5
		"7 fri"  // 6
];
var res = week.slice(2,5);
document.getElementById('demo_slice_14_5').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-3);
document.getElementById('demo_slice_14_6').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-6,5);
document.getElementById('demo_slice_14_7').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-5,-3);
document.getElementById('demo_slice_14_8').innerHTML = res;
//Substr
var week = "Atiq, masum, billah";
var rest = week.substr(2);
document.getElementById('demo_substr_14_9').innerHTML = rest;

var week = "Atiq, masum, billah";
var rest = week.substr(3,8); // Letter Spacing -From first= Out of -3 and +8
document.getElementById('demo_substr_14_9').innerHTML = rest;

var week = "Atiq, masum, billah";
var rest = week.substr(-6); // Letter Spacing -From last= Out of -6
document.getElementById('demo_substr_14_10').innerHTML = rest;

//Replacing String Content
function amakeReplaceKoro() {
	var amarVitore = document.getElementById('demo_replace_14_11').innerHTML;
	var amarDara = amarVitore.replace("Atiqur Rahman","Masum Billah");
	document.getElementById('demo_replace_14_11').innerHTML = amarDara;
}

// only the first match
function amakeReplaceKoro_2() {
	var amarVitore = document.getElementById('demo_replace_14_12').innerHTML;
	var amarDara = amarVitore.replace("PK", "Atiq");
	document.getElementById('demo_replace_14_12').innerHTML = amarDara;
}

//Case Insensitive
function amakeReplaceKoro_3() {
	var amarVitore = document.getElementById('demo_replace_14_13').innerHTML;
	var amarDara = amarVitore.replace(/ATIQUR RAHMAN/i, "Masum Billah");
	document.getElementById('demo_replace_14_13').innerHTML = amarDara;
}

//Regular Expression
function amakeReplaceKoro_4() {
	var amarVitore = document.getElementById('demo_replace_14_14').innerHTML;
	var amarDara = amarVitore.replace(/Atiqur Rahman/g, "Masum Billah");
	document.getElementById('demo_replace_14_14').innerHTML = amarDara;

}

//Converting to Upper and Lower Case
function amakeReplaceKoro_5() {
	var amarVitore = document.getElementById('demo_replace_14_15').innerHTML;
	document.getElementById('demo_replace_14_15').innerHTML = amarVitore.toUpperCase();
}

function amakeReplaceKoro_6() {
	var amarVitore = document.getElementById('demo_replace_14_16').innerHTML;
	document.getElementById('demo_replace_14_16').innerHTML = amarVitore.toLowerCase();
}

//The concat() Method









