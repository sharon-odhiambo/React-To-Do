import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, handleChangeProps, deleteTodoProps }) => (
  <ul>
    {todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        handleChangesMade={handleChangeProps}
        deletedProps={deleteTodoProps}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  todos: [],
};

export default ToDoList;
