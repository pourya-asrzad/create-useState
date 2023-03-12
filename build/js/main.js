"use strict";
//ali codes
console.log("ali");
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
