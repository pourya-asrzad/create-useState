function useState(stateVal: any) {
  /// warning state must be const casue it's value cannot change manually
  class useStateClass {
    #privateState: any = stateVal;
    constructor() {}

    get state(): any {
      return this.#privateState;
    }

    set setStateV(currentState: any) {
      this.#privateState = currentState;
    }
  }
  let statement = new useStateClass();
  let getState = function () {
    return statement.state;
  };
  function setState(newVal: any) {
    return (statement.setStateV = newVal);
  }
  return [getState, setState];
}

const [count, setCount]: any = useState([12, 13]);
console.log(count());
setCount({ color: "#DEFFEE" });
console.log(count());