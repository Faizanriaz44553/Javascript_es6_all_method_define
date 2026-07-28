// q:1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// _____________________________________________________________________________________________________

// q:2
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// _______________________________________________________________________________________________________

// q:3

// for (let i = 1; i <= 5; i++) {
//     var element = "Hello javascript"
//     console.log(i , element);
// }

// __________________________________________________________________________________________________________

// q:4

// var fruits = ["Apple", "Banana", "Mango", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
// }

// ___________________________________________________________________________________________________________

// q:5

// var marks = [50, 60, 70, 80];
// let total = 0
// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }
// console.log(total);

// _______________________________________________________________________________________________________________

// q:6

// var marks = [50, 60, 70, 80];
// let total = 0
// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }
// console.log(total / 4);

// __________________________________________________________________________________________________________

// q:7

// var colors = ["Red", "Green", "Blue", "Yellow"];
            //   0        1        2        3
                // 4  ====>  3
// for (var i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i]);
// }

// _________________________________________________________________________________________________________

// q:8

// var numbers = [5, 10, 15, 20];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Index ${i}: ${numbers[i]}`);
// }

// __________________________________________________________________________________________________________

// q:9

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log(`lenght implement: ${cities.length}`);

// var total = 0
//  for (let i = 0; i < cities.length; i++) {
//     total++
//  }
// console.log("loop implement:" + " " + total);

// _________________________________________________________________________________________________________

// q:10 
// var numbers = [2, 5, 8, 11, 14, 17, 20];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 ===0) {
//         console.log(`even number: ${numbers[i]}`);
//     }
// }

// __________________________________________________________________________________________________________

// q:10 (extra version added odd numbers)
// var numbers = [2, 5, 8, 11, 14, 17, 20];

// var evenNumber = [];
// var oddNumber = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 ===0) {
//         // console.log(`even number: ${numbers[i]}`);
//         evenNumber.push(numbers[i])
//     }
//     else{
//         // console.log(`odd number: ${numbers[i]}`);
//         oddNumber.push(numbers[i])
//     }
// }


// for (let i = 0; i < evenNumber.length; i++) {
//     console.log(`even number: ${evenNumber[i]}`);
// }
// console.log("--------------------------------------");
// for (let i = 0; i < oddNumber.length; i++) {
//     console.log(`odd number: ${oddNumber[i]}`);
// }