// Slice functions that modify parts of the state
const modifyCounter = (state, action) => {
  return {
    ...state,
    counter: state.counter + (action.type === "INCREMENT" ? 1 : 0),
  };
};

const modifyUser = (state, action) => {
  return {
    ...state,
    user: action.type === "SET_USER" ? action.payload : state.user,
  };
};

// Function composition to combine slice functions
const composeReducers =
  (...functions) =>
  (state, action) => {
    return functions.reduce((newState, fn) => fn(newState, action), state);
  };

// Combine slice functions
const rootReducer = composeReducers(modifyCounter, modifyUser);

// Initial state
const initialState = { counter: 0, user: null };

// Dispatch actions
console.log(rootReducer(initialState, { type: "INCREMENT" }));
// Output: { counter: 1, user: null }

console.log(rootReducer(initialState, { type: "SET_USER", payload: "Alice" }));
// Output: { counter: 0, user: 'Alice' }
