//classic function

function start() {
    let operation = getOperation();
    let numberArray = getArray();
    let result = calculator(operation, numberArray);
    alert(`result is :${result}`)
}

// function getOperation() {
//     return prompt("Enter your operation :")
// }

// function getArray() {
//     let array = [];
//     let number;
//     let i = 0;
//     do {
//         i++;
//         number = prompt(`Enter number ${i}`)
//         array.push(number)
//     } while (Number(number) !== 0);
//     return array;
// }

// function calculator(operation, numberArray) {
//     let result = 0;
//     switch (operation) {
//         case '-' :
//             for (const number of numberArray) {
//                 result -= Number(number);
//             }
//             break;
//         case '+' :
//             for (const number of numberArray) {
//                 result += Number(number);
//             }
//             break;
//         case '*' :
//             result = 1;
//             for (const number of numberArray) {
//                 result *= Number(number);
//             }
//             break;
//         case '/' :
//             result = 1;
//             for (const number of numberArray) {
//                 result /= Number(number);
//             }
//             break;
//     }
//     return result;
// }

//with arrow function
let getOperation = () => prompt("Enter you operation: ");

let getArray = () => {
    let array;
    array = [];
    let number;
    let i = 0;
    do {
        i++;
        number = prompt(`Enter number ${i}`)
        array.push(number)
    } while (Number(number) !== 0);
    return array;
}

let calculator = (operation, numberArray) => {
    let result = 0;
    switch (operation) {
        case '-' :
            for (const number of numberArray) {
                result -= Number(number);
            }
            break;
        case '+' :
            for (const number of numberArray) {
                result += Number(number);
            }
            break;
        case '*' :
            result = 1;
            for (const number of numberArray) {
                result *= Number(number);
            }
            break;
        case '/' :
            result = 1;
            for (const number of numberArray) {
                result /= Number(number);
            }
            break;
    }
    return result;
}


