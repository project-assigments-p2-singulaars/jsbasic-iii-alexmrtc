function concatenation(givenString1, givenString2) {
    return givenString1.concat(givenString2);
}

function getStringLength(givenString) {
    return givenString.length;
}

function createUpperCaseString(givenString) {
    return givenString.toUpperCase()
}

function createLowerCaseString(givenString) {
    return givenString.toLowerCase()
}

function getCharAtPosition(givenString, index) {
    return givenString.charAt(index)
}

function invertString(givenString) {
    let splitString = givenString.split("");

    let reverseArray = splitString.reverse();
    let invertedString = reverseArray.join("")

    return invertedString;
}

function countCharAtString(givenString, charToCount) {
    let charCount = 0;
    
    for (let index = 0; index < givenString.length; index++) {
        if (givenString[index] === charToCount) {
            charCount++;
        }
    }

    return charCount;
}

function removeWhiteSpace(givenString) {
    return givenString.trim();
}

function checPalyndrome(givenString) {
    let regex = /[\W_]/g

    let lowerCaseString = createLowerCaseString(givenString).replace(regex, "");
    let reverseString = invertString(givenString);

    return lowerCaseString === reverseString
}

function addUppercaseToFirstLetters(givenString) {
    const slicedString = givenString.split(" ");

    for (let index = 0; index < slicedString.length; index++) {
        slicedString[index] = slicedString[index][0].toUpperCase() + slicedString[index].substr(1)
    }

    return slicedString.join(" ");
}

// console.log(concatenation("Hola ", "Mundo"))
// console.log(createUpperCaseString("hskadljl"))
// console.log(getCharAtPosition("hskadljl", 3))
// console.log(invertString("hello"))
// console.log(countCharAtString("hello", "l"))
// console.log(checPalyndrome("hellolleh"))
// console.log(addUppercaseToFirstLetters("Hola mundo, como estás?"))