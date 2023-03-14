"use strict";
console.log("arman");
let setFunc = (initialValue, prev) => {
    return (prev = initialValue);
};
let initialValue;
let init;
let useState = () => [initialValue, setFunc];
let [count, setCount] = useState();
let constructorState = ["", () => { }];
////////////////////////////////////////////////////////////////////////
class useState2 {
    constructor() {
        this.state = undefined;
        this.setState = () => {
            return this.state;
        };
        this.kol = "";
        this.state = [];
    }
    get Value() {
        return this.state;
    }
}
