// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//removing index from array .shift()
//itterate through the array with a loop and shuffle

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('remove the 0 index and shuffle the remaining', (array) =>{
    test('remove first, shuffle rest', () => {
        expect(shuffleArrayMinusOne(colors1)).toContain("yellow", "blue", "pink", "green")
        expect(shuffleArrayMinusOne(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
    })
})

// b) Create the function that makes the test pass.

const shuffleArrayMinusOne = (array) => {
    array.shift()
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i = 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return(array)
}
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//make a loop to run itterate
//math max and min to go with array
//destructuring then push into new array
//sort least to greatest

describe('takes array and find lowest and highest number', (array) =>{
    test('take the highest lowest number', () => {
        expect((nums1)).toEqual([-8, 90])
        expect((nums2)).toEqual([5, 109])
    })
})

// b) Create the function that makes the test pass.

const getMinMax = (arr) => {
    const sortedArr = arr.sort((a,b) => a - b);
    const min = sortedArr[0];
    const max = sortedArr[sortedArr.length - 1];
    return [min, max];
  };


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
 
//put both arrays together
//filter repeats
//filter with indeses equal to the first one that is the same

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('combine two arrays without the reapeating numbers', (array) =>{
    test('combine arrays no repeats', () => {
        expect(combiner(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})
// b) Create the function that makes the test pass.

const combiner = (array1, array2) => {
    let combine = array1.concat(array2)
    return combine.filter((value, index) =>{
        return combine.indexOf(value) === index
    })
}


//why is it coming up? fix filter? come back in AM
// const noDuplicates = (array1, array2) => {
//     let mergedArray = array1.concat(array2)
//     // console.log(mergedArray) 

