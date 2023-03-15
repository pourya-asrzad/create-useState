"use strict";
function useState(initalValue) {
    let state = initalValue;
    function setState(inputValue = state) {
        return state = inputValue;
    }
    return [state, setState];
}
const [state, setState] = useState(1);
console.log();
setState(2);
console.log(state);
