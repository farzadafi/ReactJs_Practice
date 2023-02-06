const firstFunction = () => {
    const user = {
        firstName:'',
        lastName:'',
    }

    return function setName (name) {
        user.firstName = name;
        return user.firstName;
    }
}

const firstFunction1 = firstFunction();
console.log(firstFunction1('farzad'));