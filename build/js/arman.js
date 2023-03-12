"use strict";
///arman code 
console.log("arman");
let setFunc = (initialValue, prev) => {
    return (prev = initialValue);
};
let initialValue;
let init;
let useState = () => [initialValue, setFunc];
let [count, setCount] = useState();
////////////////////////////////////////////////////////////////////////
class useState2 {
    constructor(stateProperty) {
        this.useState = stateProperty;
    }
    get Value() {
        return this.state;
    }
}
//let [static,setStatic] = new useState2();
// console.log(a);
