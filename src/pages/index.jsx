import { AddTask } from "../components/add-task";
import { useSelector, useDispatch } from "react-redux";
import { Tasks } from "../data";
import { useEffect } from "react";
import { TaskCard } from "../components/task";
import { SearchTask } from "../components/search-task";
const HomePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.FilterReducer.filter);
  const todoList = useSelector((state) => state.TodoListReducer.todoList);

  // useEffect(() => {
  //   dispatch({
  //     type: "SETTODOLIST",
  //     payload: Tasks,
  //   });
  // }, []);

  useEffect(() => {
    if (filter === "") {
      dispatch({
        type: "SETTODOLIST",
        payload: Tasks,
      });
    } else {
      dispatch({
        type: "SETTODOLIST",
        payload: todoList.filter((task) => task.title.includes(filter)),
      });
    }
  }, [filter]);

  const handleSetFilter = (text) => {
    dispatch({
      type: "SETFILTER",
      payload: text,
    });
  };

  const handleAddTask = (text) => {
    const newItem = {
      id: new Date().getTime(),
      title: text,
      isFinished: false,
    };
    dispatch({
      type: "SETTODOLIST",
      payload: [...todoList, newItem],
    });
  };
  // useEffect(() => {
  //   console.log(todoList);
  // }, []);

  const handleRemoveTask = (id) => {
    const newArr = todoList.filter((item) => item.id !== id);
    dispatch({
      type: "SETTODOLIST",
      payload: newArr,
    });
  };

  /**
   * This function will handle setting the selected todo to a completed todo
   */
  const handleTaskCompleted = (id) => {
    const newArr = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isFinished: true };
      } else {
        return item;
      }
    });
    dispatch({
      type: "SETTODOLIST",
      payload: newArr,
    });
  };
  return (
    <>
      <AddTask AddTask={handleAddTask} />
      <SearchTask SetFilter={handleSetFilter} />
      {todoList &&
        todoList.map((item) => (
          <TaskCard
            key={item.id}
            el={item}
            RemoveTask={handleRemoveTask}
            CompleteTask={handleTaskCompleted}
          />
        ))}
    </>
  );
};

export default HomePage;
