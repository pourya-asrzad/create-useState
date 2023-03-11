console.log("arman");

type setter = (callFunc: any) => any;

class useState {
  constructor(public initialValue: any, setterFunc: any) {
    this.initialValue = initialValue;
  }
}
