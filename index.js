let password = "Abc85";

let lib = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

class letter{
    constructor(v){
        this.v = v;
    }

    incriment() {
        if(this.v < lib.length-1) {
            this.v++;
            return 1;
        } else {
            this.v = 0;
            return 0;
        }
    }

    get value() {
        return lib[this.v];
    }
}

class word {
    constructor() {
        this.letters = new Array(new letter(0));
    }

    incriment() {
        try {
            for(let i = 0; this.letters[i].incriment() == 0; i++){}
        } catch(err){
            this.letters.push(new letter(0));
        }
    }

    get value() {
        let out = "";

        for(let i of this.letters){
            out += i.value;
        }
        return out;
    }
}

x = new word();
let i = 0;
while(x.value != password) {
    x.incriment();
    i++;
}
console.log(i, x.value);
