//ali codes
console.log("ali");
export interface State {
  state: any;
}

export default class useState implements State {
  constructor(private _state: any = "") {}

  get state(): any {
    return this._state;
  }

  set state(state: any) {
    this._state = state;
  }
}
