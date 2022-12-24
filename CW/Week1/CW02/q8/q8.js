function getNumber() {
    let number = prompt("Enter your number:")
    alert(`reverse is ${reverse(number)}`)
}

const reverse = (num) => parseInt(String(num)
    .split("")
    .reverse()
    .join(""), 10);