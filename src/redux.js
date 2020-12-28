import { createStore } from "redux";

// STORE: GLOBALIZED STATE
let store = createStore(counterReducer);

// ACTION: describe what we are about to do
const increment = () => {
  return {
    type: "INCREMENT", // describe the action
  };
};

// REDUCER: where you do the logic, what will happens to your state
// like a function filter out the action: reducer takes a look at the action > base on the action > modify the state
const counter = (state = 0, action) => {
  switch ((action, type)) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// DISPATCH: send action to work: FIRE! button
DISPATCH("INCREMENT");
