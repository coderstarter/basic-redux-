import "./styles.css";

function App() {
  return null;
}

function reducerCounter(currentState = 0, action) {
  switch (action.type) {
    case "INC":
      return currentState + 1;
    case "DESC":
      return currentState - 1;
    case "RESET":
      return 0;
    default:
      return currentState;
  }
}

import { createStore } from "redux";

const store = createStore(reducerCounter);

console.log(store.getState());

store.subscribe(() => {
  console.log("The state was changed");
  console.log(store.getState());
});

store.dispatch({ type: "INC" });
console.log(store.getState());
export default App;
