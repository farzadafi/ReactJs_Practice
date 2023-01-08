function getInformation() {
    let button = document.querySelector('#getInformationButton');
    button.addEventListener('click', function () {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        alert(`entered username is ${username}`)
        alert(`entered password is ${password}`)
    });
}