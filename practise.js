// Create a function that takes two numbers as arguments and returns their sum.

// function twoNumSum(num1, num2){
//     return num1 + num2
// }
// console.log (twoNumSum( 5 , 13))

//---------------------------------------------------------------------------------

// Write a function that takes an integer minutes and converts it to seconds.
// function minutesPerSecond(minutes){
//   return  minutes * 60
// }
// console.log(minutesPerSecond(8))

//---------------------------------------------------------------------------------

//Write a function that takes the base and height of a triangle and return its area.
// function areaOfTringle(base, height) {
//     return 1/2 * base * height
// }

// console.log(areaOfTringle(6, 10))

// function yenToUSD(yen) {
//     return yen * 1.567663345345353453
// }

// console.log(yenToUSD(5))

//---------------------------------------------------------------------------------

//Create a function that takes an array containing only numbers and return the first element.
// const ranArr = [
//     1, // 0
//     2, // 1
//     5, // 2
//     4 // 3
// ]
// const numArr1 = [12345, 3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr2 = [1234, 3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr3 = [123, 3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr4 = [12, 3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr5 = [1, 3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr6 = [3555, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr7 = [355, 51234, 123123, 86663, 959, 767667, 123123, 67593]
// const numArr8 = [35, 51234, 123123, 86663, 959, 767667, 123123, 67593]

// function getFirstElement(arr) {
//     return arr[0]
// }

// console.log(getFirstElement(numArr8))

//---------------------------------------------------------------------------------

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function totalPoints(twoPointer, threePointer) {
   
    return twoPointer * 2 + threePointer * 3
}
console.log (totalPoints (8, 13))

