import React, { useState } from "react";
import TodoList from "./TodoList";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  todoSelector,
  toggleTodo
} from "../store/todoSlice";
import { nanoid } from "nanoid";

function Home() {
  const [todo, setTodo] = useState({ title: "", done: false });
  // dengan selector untuk mengambil semua data dari redux
  const todoArr = useSelector(todoSelector);
  // const [todoArr, setTodoArr] = useState([]);

  const onChange = event => {
    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };

  const dispatch = useDispatch();

  const createTodo = event => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "submit") {
      const newTodo = { id: nanoid(), title: todo.title };
      dispatch(addTodo(newTodo));
      setTodo({ title: "", done: false });
    }
  };

  const completeTodo = i => {
    const editedTodoID = todoArr[i].id;
    dispatch(toggleTodo({ id: editedTodoID }));
  };

  const deleteTodo = i => {
    const editedTodoID = todoArr[i].id;
    dispatch(removeTodo({ id: editedTodoID }));
  };

  return (
    <>
      <div className='box'>
        <div className='text-end'>
          <h2>TODOS</h2>
          <h4>Make your plan here</h4>
        </div>
        <div className='text-submit'>
          <input
            type='text'
            name='todo'
            placeholder='Add Todo...'
            value={todo.title}
            onKeyPress={createTodo}
            onChange={onChange}
          />
          <button
            className='btn-submit'
            type='button'
            name='submit'
            onClick={createTodo}>
            Submit
          </button>
        </div>
      </div>
      <TodoList
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default Home;
