"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Sri Ram", last: "Singarapu" });
// --------------------------------------------------------------------------------------------------
function random() {
    return { x: Math.random(), y: Math.random() };
}
//---------------------------------------------------------------------------------------------------
printName({ first: "Sr", last: "looks", age: 22 }); //Object literal may only specify known properties
var details = { first: "Sr", last: "looks", age: 22 }; // this is a valid syntax. we can assign varibales
printName(details);
