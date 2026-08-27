// q:1
// function sayHello() {
//     console.log("Hello world");
// }
// sayHello()
// ____________________________________________________________

// q:2
// function showName(name) {
//     console.log(`Hello ${name}`);
// }
// showName("Faizan")
// ____________________________________________________________

// q:3
// function add(a,b) {
//     console.log(`Sum ===> ${a} + ${b} = ${a+b}`);
// }
// add(6, 4)
// ____________________________________________________________

// q:4
// function subtract(a,b) {
//     console.log(`subtract ===> ${a} - ${b} = ${a-b}`);
// }
// subtract(6, 4)
// ____________________________________________________________

// q:5
// function multiply(a,b) {
//     console.log(`multiply ===> ${a} * ${b} = ${a*b}`);
// }
// multiply(6, 4)
// ____________________________________________________________

// q:6
// function square(a) {
//     console.log(`square ===> ${a} = ${a**2}`);
// }
// square(10)
// ____________________________________________________________

// q:7
// function cube(num) {
//     return num**3
// }

// console.log(`cube ===> ${10} = ${cube(10)}`);
// ____________________________________________________________

// q:8
// function getFullName(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`
//     return fullName
// }

// console.log(`Your name is ${getFullName("Faizan" , "Riaz")}`);
// ____________________________________________________________

// ______________________LEVEL 02_________________________________

// q:1
// function isEven(num) {
//     if (num%2 ===0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isEven(29));

// _________________________________________________________________________

// q:2

// function isPositive(num) {
//     if (num === 0) {
//         return "zero"
//     } else if (num > 0) {
//         return "positive"
//     } else if (num <0) {
//         return "nagitive"
//     }
// }
// console.log(`Your number is ${isPositive(8)}`);

// _____________________________________________________________________________

// q:3

// function findGreater(a, b) {
//     if (a> b) {
//         return a
//     }
//     else if (b> a) {
//         return b
//     }
//     else if (a===b) {
//         return a
//     }
// }
// console.log(`comperition: ${100} v/s ${90} = Greater number is ===> ${findGreater(100,90)}`);
// _____________________________________________________________________________________

// q:4

// function canVote(age) {
//     if (age >= 18) {
//         return "Eligible"
//     } else {
//         return "Not Eligible"
//     }
// }
// console.log(canVote(18));
// _____________________________________________________________________________________________

// q:5

// function checkNumber(num) {
//     if (num% 2 ===0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(`your number is ${checkNumber(6)}`);
// _________________________________________________________________________________________

// q:6

// 80+ → A
// 70+ → B
// 60+ → C
// 50+ → D
// Below 50 → Fail
//  var userNumber = Number(prompt("enter your mark"))
// function getGrade(marks) {
//     if (marks >= 80) {
//         return "A"
//     } else if (marks >= 70) {
//         return "B"
//     }
//      else if (marks >= 60) {
//         return "C"
//     }
//      else if (marks >= 50) {
//         return "D"
//     }
//      else if (marks < 50) {
//         return "Fail"
//     }
// }
// console.log(getGrade(userNumber));

// ________________________________________________________________________

// q:7

// function isDivisibleBy5(num) {
//     if (num %5 ===0) {
//         return true
//     }
//     return false
// }

// console.log(isDivisibleBy5(10));

// ______________________________________LEVEL 3 _______________________________

// Q:1

// function getLength(str) {
//     return str.length
// }
// console.log(getLength("faizan"));

// _________________________________________________________________________________

// q: 2

// function toUpperCase(str) {
//     return str.toUpperCase()
// }
// console.log(toUpperCase("faizan"));
// _________________________________________________________________________________

// q: 3

// function getFirstCharacter(str) {
//     return str[0]
// }
// console.log(getFirstCharacter("faizan"));
// _________________________________________________________________________________

// q: 4

// function isLongWord(word) {
//     if (word.length > 5) {
//         return true
//     }
//     return false
// }
// console.log(isLongWord("faizan"));

// _____________________________________________________________________________________

// ___________________________________LEVEL 4_____________________________________

// q:1

// function calculateDiscount(price, discount) {
//     var devide = price * discount
//     var percen = devide / 100
//     return price - percen

//     // _____short hand ______
//     //return price - (price * discount / 100)
// }

// console.log(calculateDiscount(1000, 30));

// ______________________________________________________________________________

// Q:2
// var birthYear = Number(prompt("enter your birth year"));
// var currentYear = Number(prompt("enter your current year"));
// function calculateAge(birthYear, currentYear) {
//     return currentYear - birthYear
// };
// console.log(`Your age is ${calculateAge(birthYear, currentYear)}`);
// alert(`Your age is ${calculateAge(birthYear, currentYear)}`);

// _________________________________________________________________________________

// q:3

// function convertToMinutes(hours) {
//     return hours * 60
// }

// console.log(convertToMinutes(2));

// _____________________________________________________________________________________

// q:4

// function getLargest(a, b, c) {
//    if (a>= b && a>= c) {
//      return a
//     }
//    else if (b >= a && b >= c) {
//        return b
//     }
//     else if (c>= a && c>= b) {
//         return c
//     }
// }
// console.log(getLargest(90,80,70));

// _________________________________________________________________________________________

// q:5

// function calculator(a, b, operator) {
//     if (operator === "+") {
//         return a+ b
//     }
//     else if (operator === "-") {
//         return a-b
//     }
//     else if (operator === "*") {
//         return a * b
//     }
//     else if (operator === "/") {
//         return a/b
//     }
// }
// console.log(calculator(10 , 5 , "+"));

// ______________________________________________________________________________________________

// ____________________________________BONUS CHALLANGE ____________________________________________

// Q:1
// function countCharacters(str) {
//     var count = 0
//     for (let i = 0; i < str.length; i++) {
//         count += 1
//     }
//     return count
// }
// console.log(countCharacters("faizan Riaz"));

// _____________________________________________________________________________________________

// Q:2
// function reverseString(str) {
//     var count = []
//     for (let i = 0; i < str.length; i++) {
//         count.push(str[i])
//     }
//     return count.reverse().join("")
// }
// console.log(reverseString("faizan"));

// ______________________________________________________________________________________________

// q:3

// var value = prompt("Enter and get total vowel charecters")

// function countVowels(word) {
//     var str = word.toUpperCase()
//     var result = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "A") {
//             result.push(str[i])
//         }
//         else if (str[i] === "E") {
//             result.push(str[i])
//         }
//         else if (str[i] === "I") {
//             result.push(str[i])
//         }
//         else if (str[i] === "O") {
//             result.push(str[i])
//         }
//         else if (str[i] === "U") {
//             result.push(str[i])
//         }
//     }
//     return result.length
// }

// console.log(countVowels(value));
// alert(`total vowel values is ${countVowels(value)}`)

// _________________________________________________________________________________________

// q:4

// function factorial(num) {
//     var total = 1
//    for (let i = num; i > 0; i--) {
//        total = i * total
//     }
//     return total
// }

// console.log(factorial(5));

// ____________________________________________________________________________________________

// q:5

// var value = prompt("enter a remdom word to check plindrom word or not");

// function isPalindrome(word) {
//     var plindrome = []
//     for (let i = 0; i < word.length; i++) {
//          plindrome.push(word[i])
//     }
//     if (plindrome.reverse().join("") === word) {
//         return true
//     }
//     return false
// }

// if (isPalindrome(value)) {
//     alert(`yes ${value} is a plindrom word`)
//     console.log(isPalindrome(value));
// } else {
//     alert(`sorry ${value} is not a plindrome word`)
//     console.log(isPalindrome(value));
// }













