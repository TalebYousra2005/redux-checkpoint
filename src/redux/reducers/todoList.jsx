import { Tasks } from "../../data";
const initialState = {
  todoList: Tasks,
};

const TodoListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SETTODOLIST":
      return { ...state, todoList: payload };
    default:
      return state;
  }
};
export default TodoListReducer;
