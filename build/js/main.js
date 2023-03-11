"use strict";
class Coder {
    constructor(name, music, age, lang = 'js') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello , I'm ${this.age}`;
    }
}
const Pouria = new Coder('Pouria', 'asr', 22);
console.log(Pouria.getAge());
// console.log(Pouria.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang} `;
    }
}
const Sara = new WebDev('Mac', 'Sare', 'asr', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Page = new Guitarist('Pouria', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////
class Peeps {
    static Getcount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('john');
const Steve = new Peeps('Steve');
const PouriaAsrzad = new Peeps('Pouria');
console.log(PouriaAsrzad.id);
console.log(Steve.id);
console.log(john.id);
//
console.log(Peeps.count);
//////////////////////////'
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Golam', 'Led zed'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Hoshang'];
console.log(MyBands.data);
// MyBands.data =['Van Halen',222]
