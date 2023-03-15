"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
function useState(stateVal) {
    var _useStateClass_privateState;
    /// warning state must be const casue it's value cannot change manually
    class useStateClass {
        constructor() {
            _useStateClass_privateState.set(this, stateVal);
        }
        get state() {
            return __classPrivateFieldGet(this, _useStateClass_privateState, "f");
        }
        set setStateV(currentState) {
            __classPrivateFieldSet(this, _useStateClass_privateState, currentState, "f");
        }
    }
    _useStateClass_privateState = new WeakMap();
    let statement = new useStateClass();
    let getState = function () {
        return statement.state;
    };
    function setState(newVal) {
        return (statement.setStateV = newVal);
    }
    return [getState, setState];
}
const [count, setCount] = useState([12, 13]);
console.log(count());
setCount({ color: "#DEFFEE" });
console.log(count());