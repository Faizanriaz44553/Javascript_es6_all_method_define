// q:1
// var colors = ["Red", "Blue", "Green", "Yellow"];
// console.log(colors[0]);
// console.log(colors[3]);
// colors[1] = "Black"
// console.log(colors);

// _______________________________________________________________________

// q:2

// var student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };
// console.log(student.name);
// console.log(student.city);
// student.city = "lahore"
// console.log(student);

// _________________________________________________________________________

// q:3

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];
// console.log(students[0].marks);
// console.log(students[1].atten);
// students[2].marks= 95
// students[1].atten= true
// console.log(students);

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].name} - ${students[i].marks} - ${students[i].atten}`);
// }

// _____________________________________________________________________________

// q:4

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].name} - ${students[i].marks} - ${students[i].atten}`);
// }

// ___________________________________________________________________________

// extra bonus

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];
// var totalMark = 0
// for (let i = 0; i < students.length; i++) {
//     totalMark  = students[i].marks + totalMark
// }
// console.log(totalMark);

// ______________________________________________________________________________________

// extra bonus
// Find the average marks.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// var totaLMarks = 0
// for (let i = 0; i < students.length; i++) {
//     totaLMarks = students[i].marks + totaLMarks
// }
// console.log(totaLMarks / students.length);

// ____________________________________________________________________________________

// extra bonus
// Increase every student's marks by 5.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     students[i].marks = students[i].marks + 5 
// }
// console.log(students);