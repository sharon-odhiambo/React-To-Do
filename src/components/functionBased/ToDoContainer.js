import React, { useEffect, useState } from 'react';
import ToDoList from './ToDoList';
import InputTodo from './ToDoInput';

const TodoContainer = () => {
  function getStoredTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getStoredTodos());

  useEffect(() => {
    const getStorage = () => {
      const temp = localStorage.getItem('todos');
      const loadedTodos = JSON.parse(temp);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    };
    getStorage();
  }, []);
  console.log(todos);

  // useEffect(() => {
  //   const temp = JSON.stringify(todos);
  //   localStorage.setItem('todos', temp);
  // }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const addTodoItem = (id, title, completed = false) => {
    const newTodo = {
      id, title, completed,
    };
    setTodos({
      todos: [...todos, newTodo],
    });
  };

  const delTodo = (id) => {
    setTodos({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  return (
    <>
      <InputTodo addTodoProps={addTodoItem} />
      <ToDoList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </>
  );
};
export default TodoContainer;
