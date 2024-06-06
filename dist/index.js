"use strict";
// union types
let mix = 12;
// literal types
let names = "Elnur";
// array types
const persons = ["Elvin", "Elnur", "Tohid", 3];
const obj = {
    name: "Elvin ",
    age: 25,
};
let array = [
    {
        name: "Elvin",
    },
    {
        name: "Sahil",
        age: 34,
    },
];
// tuple
const workers = [
    "Elvin",
    "Elnur",
    "Tohid",
    12,
];
function add({ a, b }) {
    return a + b;
}
let arr = [
    {
        name: "Test",
        age: 25,
    },
];
let arr2 = [
    {
        name: 100,
        age: 35,
    },
];
let arr3 = [
    {
        name: true,
    },
];
const Elvin = {
    id: 1,
};
let object = {
    id: 1,
    name: "Elvin",
    bio: "test",
    color: "lime",
};
const test = {
    name: "Elvin",
};
//Butun ozelliklerinden istifade etmesede olar "Partial"
const test2 = {
    name: "Elvin",
    age: 25,
};
//Butun ozelliklerinden mecbnuri istifade etmelidi "Required"
const test3 = {
    name: "Elvin",
    age: 25,
};
//Object icinde olan deyerleri deyismek olmur
const test4 = {
    name: "Elvin",
    //   age: 25,
};
//Interface icinden istediyimiz xüsussiyəti secerek istifade ede bilerik
const test5 = {
    name: "Elvin",
    //   age: 25,
};
//Interface icinden istifade etmek istemediyimiz xüsusiyyəti seçərək istifadədən çıxara bilərik
