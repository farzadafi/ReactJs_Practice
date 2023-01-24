let user = {
    name: 'farzad',
    age: 30,
    hello  () {
        console.log(`hello ${this.name}`);
    }
};

user.hello();