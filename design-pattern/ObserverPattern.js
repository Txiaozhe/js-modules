class Subject {
    constructor() {
        this.observers = [];
        this.state = 0;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notifyAllObservers() {
        for (let observer of this.observers) {
            if (typeof observer['update'] === 'function') {
                observer.update();
            } else {
                console.log('observer.update is not a function');
            }
        }
    }
}

class Observer {
    constructor() {
        this.subject = null;
    }

    update() {

    }
}

class BinaryObserver extends Observer {
    constructor(subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log("Binary String: ", this.subject.getState().toString(2)); 
    }
}

class HexObserver extends Observer {
    constructor(subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log("Hex String: ", this.subject.getState().toString(16)); 
    }
}

const subject = new Subject();
new BinaryObserver(subject);
new HexObserver(subject);

console.log('test1: set state is 15');
subject.setState(15);

console.log('test2: set state is 20');
subject.setState(20);

setTimeout(() => {
    console.log('test3: set state is 8');
    subject.setState(8);
}, 3000);
