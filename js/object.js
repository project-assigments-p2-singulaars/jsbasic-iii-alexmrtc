function getName(givenObject) {
    return givenObject.nombre;
}

function updateAge(givenObject, newAge) {
    givenObject.edad = newAge;
    console.log(givenObject.edad);
}

function addNewProperty(givenObject, propertyName) {
    givenObject[propertyName] = null

    console.log(givenObject);
}

function removeProperty(givenObject, propertyName) {
    delete givenObject[propertyName];
    console.log(givenObject)
}

function getNumberOfProperties(givenObject) {
    return Object.keys(givenObject).length;
}

function doesContainPropery(givenObject, propertyName) {
    return propertyName in givenObject;
}

function returnObjectValues(givenObject) {
    let objectValuesArray = [];

    for (const key in givenObject) {
            objectValuesArray.push(givenObject[key]);
    }

    return objectValuesArray;
}

function compareObjects(givenObject1, givenObject2) {
    return JSON.stringify(givenObject1) === JSON.stringify(givenObject2)
}

function createObjectCopy(givenObject) {
    let clonedObject = { ...givenObject};

    return clonedObject;
}

function mergeObject(givenObject1, givenObject2) {
    let mergedObject = {
        ...givenObject1,
        ...givenObject2
    }

    return mergedObject;
}

// console.log(getName({nombre: "ALEX"}));
// updateAge({edad: 23}, 24);
// addNewProperty({nombre: "ALEX", edad: 23}, "profesión");
// removeProperty({nombre: "ALEX", edad: 23, profesión: "PROGRAMADOR"}, "profesión");
// console.log(getNumberOfProperties({nombre: "ALEX", edad: 23, profesión: "PROGRAMADOR"}));
// console.log(doesContainPropery({nombre: "ALEX"}, "nombre"));
// console.log(returnObjectValues({nombre: "ALEX", edad: 23, profesión: "PROGRAMADOR"}));
// console.log(createObjectCopy({nombre: "ALEX", edad: 23}));
// console.log(mergeObject({nombre: "ALEX", edad: 23}, {profesión: "PROGRAMADOR", edad: 24}));
