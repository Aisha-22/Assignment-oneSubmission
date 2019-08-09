
//var aishaRandomNumber = Math.floor(Math.random() * (15 - 5) + 5);

//below i break down the aishaRandomNumber = Math.floor(Math.random() * (15 - 5) + 5); to properly track where my random number is
var aishasRandomNumber = Math.random();
var setttingMinAndMAxToBetweenFiveAndFifteen = (aishasRandomNumber * (15-4)) + 5; 
var myRandomValue = Math.floor(setttingMinAndMAxToBetweenFiveAndFifteen);



console.log("this is my random with just Math.random() = " + aishasRandomNumber);
console.log("This is the number after setting 5 to be minimum and 15 to be max by multiplying Math.Random() by eleven is = " + setttingMinAndMAxToBetweenFiveAndFifteen); 
console.log("the number after Using Math.floor to remove decimals is = "+ Math.floor(setttingMinAndMAxToBetweenFiveAndFifteen));

console.log("this is my final random floored random is = " + myRandomValue);
document.getElementById("myRandomNumberParagraph").innerHTML = "The number is: "+ myRandomValue;


