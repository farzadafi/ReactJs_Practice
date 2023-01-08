function getInformation() {
    let button = document.querySelector('#getInformationButton');
    button.addEventListener('click', function () {
        alert("farzad")

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        alert(`entered username is ${username}`)
        alert(`entered password is ${password}`)
    });
}