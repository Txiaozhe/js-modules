class EXP {
    log(a) {
        throw new Error('eee')
    }

    test() {
        try {
            this.log('1');
        } catch (e) {
            if(false) {
                // console.log(this.log);
            } else {
                if(true) {
                    console.log(this.log);
                }
            }
        }
    }
}

(new EXP()).test();
