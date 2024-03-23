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