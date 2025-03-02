const months = ["january","february","march","april","May","december"];

// //for each
// const smallmonth = months.forEach((month) => {
//     console.log(month);   
//     return month;
// })
// console.log(smallmonth); //undefined retuen, do not store as an array


// // map
// const capmonth = months.map((month) => {
//     console.log(month);
//     return month.toUpperCase();
// })
// console.log(capmonth); //return array, month store as an array


// // filter
// const filtermonth = months.filter((month,idx,array) => {    //create new array and filter data 
// // from array on conditions
//     console.log(month);  // return month which have idx > 3
//     return idx > 3;
//     // month = month.toUpperCase();
//     // return month.includes('M'); // print all months which contains m either capital or small
// })



// const students = [
//     {
//         name: 'Ashish',
//         age: 21,
//     },
//     {
//         name: 'Khushboo',
//         age: 19,
//     },
//     {
//         name: 'Babli',
//         age: 15,
//     },
//     {
//         name: 'dhairya',
//         age: 5,
//     },
//     {
//         name: 'Priyanka',
//         age: 28,
//     },
// ]

// const filteredStudent = students.filter((student) => {
//     return student.age >= 18;
// })//.map((student) => {
// //     return student.name;
// // })

// const filteredStudentName = filteredStudent.map((student) => {
//     return student.name;
// })




//REDUCE
// The reduce() method in JavaScript is used to iterate over an array and reduce 
// it to a single value. 
// It executes a reducer function on each element of the array, accumulating a result.

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // logic
// }, initialValue);

// Find Maximum in an Array
const numbers = [10, 25, 50, 5, 90];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // Output: 90

//Sum of Object Property Values
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 }
];
const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // Output: 100000

