import { compose, createStore, combineReducers } from "redux";
import TodoListReducer from "./reducers/todoList";
import TitleReducer from "./reducers/title";
import FilterReducer from "./reducers/filter";
// const initialState = {
//   counter: 0,
//   title:"helo"
// };

// // reducer
// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     case "CHANGETITLE":
//       return { ...state, title:state.title = payload };
//     default:
//       return state;
//   }
// };


const Reducers = {
    FilterReducer,
    TodoListReducer,
    TitleReducer,
};

const rootReducer = combineReducers(Reducers)
const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__())
);
export default store;