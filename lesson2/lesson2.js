// let a = 100;
// let b = a;
// console.log(b);
// b = 200;
// console.log(b);
// console.log(a);

//
// let user1 = {
//     name: "John", surname: "Smith"
// }
//
// let user2 = user1;
// console.log(user2);
// user2.name = 'Axel';
// console.log(user2);
// console.log(user1);


// let user1 = {
//     name: "John",
//     surname: "Smith",
//     wife: {
//         name: 'Molly',
//         surname: 'Smith',
//         age: 20
//     }
// }
//
// user1.age = 25;
// console.log(user1);
//
// console.log(user1.name);
// console.log(user1.wife.name);


let appleCo = {
    title: 'fruitCo',
    code: 978796133,
    location: {
        country: 'USA',
        city: 'Illinois',
        street: 'Evertgreen Terrace',
        num: 7,
        coords: {
            lng: 87.8974,
            lat: 987.99
        }
    }
};


let product1 = {
    title: 'apple',
    price: 200,
    producer: appleCo,
    colors: ['red', 'green', 'yellow']
}
// console.log(product1);
//
// console.log(product1.producer.location.coords.lng);
//
// product1.producer.title = 'fruit co';
// console.log(product1);

let product2 = {
    title: 'orange',
    price: 210,
    producer: appleCo,
    colors: ['red']
}

console.log(product2.colors);
console.log(product2.colors[0]);
console.log(product2.colors[1]);

console.log(product1);
console.log(product2);

let products = [
    product1, // 0
    product2 // 1
];

console.log(products);
console.log(products[1].producer.location.coords.lng);

//
// let listOfNames = [
//     {name: 'vsya', age: 30}, // 0
//     {name: 'anna', age: 31}, // 1
//     {name: 'john', age: 33}, // 2
//     {name: 'molly', age: 19} // 3
// ];
// console.log(listOfNames);
// console.log(listOfNames[3].name);










