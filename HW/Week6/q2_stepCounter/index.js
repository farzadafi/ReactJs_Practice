const stepCounter = {
    counter: 0,
    increase() {
        ++this.counter;
    },
    decrease() {
        if(this.counter > 0)
            --this.counter;
        else
            this.counter = 0;
    },
    reset() {
        this.counter = 0;
    },
    read() {
        console.log(`your number step is ${this.counter}`)
    }
}

stepCounter.increase();
stepCounter.increase();
stepCounter.increase();
stepCounter.read();
stepCounter.decrease();
stepCounter.read();
stepCounter.reset()
stepCounter.read();