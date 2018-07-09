class Get {
    constructor(props) {
        this.n = props.name;
    }

    set name(d) {
        this.n = 'ddd';
    }
}

const g = new Get({name: 'lll'});
console.log(typeof g.name)
