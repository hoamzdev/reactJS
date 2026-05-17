import { useReducer } from "react";


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
      break;
    case 'decrement':
      return { count: state.count - 1 };
      break;
    default:
      throw new Error("Invalid action");
  }
}

export default function Manifest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <p>This is a paragraph {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}