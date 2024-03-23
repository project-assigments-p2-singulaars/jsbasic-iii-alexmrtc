function arrayAddition(givenArray) {
    let result = 0;

    givenArray.map((number) => {
        result += number;
    })

    return result;
}

function arrayAverage(givenArray) {
    let average = arrayAddition(givenArray) / givenArray.length;

    return average;
}

function sortArrayValues(givenArray) {
    let sortedArray = givenArray.sort(function (number1, number2) {return number1-number2});

    return sortedArray;
}

function getHigherValuesInArray(givenArray, limiter) {
    let aboveLimiterArray = givenArray.filter((number) => number > limiter);

    return aboveLimiterArray;
}

function arrayConcatenation(givenArray1, givenArray2) {
    let concatenatedArray = givenArray1.concat(givenArray2);
    return concatenatedArray; 
}

function getMaxValueInArray(givenArray) {
    let maxValue = Math.max(...givenArray);

    return maxValue;
}

function getMinValueInArray(givenArray) {
    let minValue = Math.min(...givenArray);

    return minValue;
}

function getNumberOfElementInArray(givenArray, element) {
    let elementCount = 0;
    
    givenArray.filter((arrayValue) => {
        if (arrayValue === element) {
            elementCount++;
        }
    });

    return elementCount;
}

function removeDuplicatesFromArray(givenArray) {
    let noDuplicatesArray = givenArray.filter((element, index) => givenArray.indexOf(element) === index)
 
    return noDuplicatesArray;
}

function reverseArray(givenArray) {
    let reveresedArray = givenArray.reverse();

    return reveresedArray;
}


// console.log(arrayAverage([2,3,4,1,10,6]));
// console.log(sortArrayValues([2,3,4,1,10,6]));
// console.log(getHigherValuesInArray([2,3,4,1,10,6], 3));
// console.log(arrayConcatenation([2,10,6], [3,2]));
// console.log(getMaxValueInArray([2,10,6, 23]));
// console.log(getMinValueInArray([2,10,6, 23]));
// console.log(getNumberOfElementInArray([2,10,6, 23, 2, 10, 2], 1));
// console.log(removeDuplicatesFromArray([2,6,10,6, 23, 2, 10, 2]));
// console.log(reverseArray([2,6,10,23]));