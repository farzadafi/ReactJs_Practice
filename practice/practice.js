// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
//
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );

//array

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum"
// ];
//
// console.log(fruits)

// let fruits = ["Banana"]
//
// let arr = fruits; // copy by reference (two variables reference the same array)
//
// console.log( arr === fruits ); // true
//
// arr.push("Pear"); // modify the array by reference
//
// console.log( fruits );

// let fruits = ["Apples", "Pear", "Orange"];
//
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
//
// // what's in fruits?
// console.log( fruits.length ); // ?

// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// let middleIndex = parseInt(styles.length / 2 );
// styles[middleIndex] = 'Classic';
//
// styles.shift();
// styles.unshift('Rap', 'Reggae')
// console.log(styles)
//
// let arr = ["a", "b"];
//
// arr.push(function(naser) {
//     console.log( this );
// })
//
// console.log(arr[2]()); // a,b,function(){...}

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id === 3 )

console.log(user);