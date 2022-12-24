function giveNumber() {
    let number = prompt("enter your number:")
    console.log(`your number is: ${number}`)
    console.log(`your reverse number is ${calculateReverse(number)}`)
    console.log(`your power ten number is ${powerTen(number)}`)
    console.log(`your bool value number is ${boolValue(number)}`)
    console.log(`your type number is ${typeNumber(number)}`)
}

function calculateReverse(number) {
    return (
        parseFloat(
            number
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(number)
    )
}

function powerTen(number) {
    return number ** 10;
}

function boolValue(number) {
    return Boolean(number);
}

function typeNumber(number) {
    return typeof (number);
}