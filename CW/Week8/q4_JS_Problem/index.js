function askPassword(ok, fail) {
    let password = prompt("password?", '');
    if (password === 'rockstar')
        ok();
    else
        fail();
}

let user = {
    name: 'John',
    loginOK() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} logged in Fail`);
    },
};

askPassword(user.loginOK(), user.loginFail());