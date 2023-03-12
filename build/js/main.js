"use strict";
console.log("arman");
let setFunc = (initialValue, prev) => {
    return (prev = initialValue);
};
let initialValue;
let init;
let useState = () => [initialValue, setFunc];
let [count, setCount] = useState();
//let [as, d] = useState1();
class useState2 {
    constructor() { }
    get Value() {
        return this.state;
    }
}
let a = new useState2();
// console.log(a);
