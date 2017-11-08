// State argument is not application state, only the state this reducer is responsible for
// reducers get the current state, and the action
// state = null - assign default value to avoid error 
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state;
}
