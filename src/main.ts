

function useState(initalValue:any):[any,Function]{

  let state = initalValue;

function setState(inputValue:any=state){
   return state = inputValue;
  }

  return [state,setState];
}


const [state,setState]= useState(1);
console.log();
setState(2)

console.log(state);