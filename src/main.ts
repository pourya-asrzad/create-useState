console.log("ali");
type setter = (callFunc: any, initialValue: any) => {};

class useState {
  constructor(private initialValue: any, setterFunc: setter) {
    this.initialValue = initialValue;
  }
  public get StateValue(): any {
    return this.initialValue;
  }
  public setter(initialValue: any) {}
}
