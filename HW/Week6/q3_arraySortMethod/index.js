let people = {
    men : [{"first_name":"Vernen","age":48},
        {"first_name":"Keely","age":28},
        {"first_name":"Myranda","age":43},
        {"first_name":"Guillema","age":6},
        {"first_name":"Gilburt","age":43},
        {"first_name":"Clemmy","age":3},
        {"first_name":"Caitrin","age":39},
        {"first_name":"Suzanne","age":26},
        {"first_name":"Hurleigh","age":38},
        {"first_name":"Maxwell","age":20},
        {"first_name":"Kirby","age":48},
        {"first_name":"Cyrill","age":1},
        {"first_name":"Cooper","age":15},
        {"first_name":"Nona","age":48},
        {"first_name":"Hasheem","age":50}],
    read() {
        console.log(this.men)
    },
    youngest() {
        this.men = this.men.sort((a, b) => {
            return a.age - b.age;
        });
    },
    oldest() {
        this.men = this.men.sort( (a, b) => {
            return b.age - a.age;
        } )
    }
}

console.log('first array is:')
people.read();
people.youngest();
console.log(`array after youngest sort is:`)
people.read();
people.oldest();
console.log(`array after oldest sort is:`)
people.read();
