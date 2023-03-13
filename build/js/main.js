"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ali codes
console.log("ali");
class useState {
    constructor(_state = "") {
        this._state = _state;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
}
exports.default = useState;
