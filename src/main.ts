///arman code 
console.log("arman");

type setter = (callFunc: any, initialValue: any) => {};

let setFunc = (initialValue: any, prev?: any): any => {
  return (prev = initialValue);
};
let initialValue: any;

let init: any;
let useState = () => [initialValue, setFunc];
let [count, setCount] = useState();

//let [as, d] = useState1();
type state = any;
type setState = () => {};
type constructor = [state: state, setState: setState];
type stateProperty = [state: any, setState: setState];
////////////////////////////////////////////////////////////////////////
class useState2 {
  private state: any;
  public useState: constructor;
  constructor(stateProperty: stateProperty) {
    this.useState = stateProperty;
  }

  get Value(): any {
    return this.state;
  }
}

//let [static,setStatic] = new useState2();

// console.log(a);

