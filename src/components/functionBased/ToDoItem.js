import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ToDoItem = (props) => {
  const { todo, handleChangesMade, deletedProps } = props;
  return (
    <li key={todo.id} className={todo.completed ? 'checked' : null}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangesMade(todo.id)}
        />
        {todo.title}
      </span>
      <button type="button" onClick={() => deletedProps(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
};
ToDoItem.propTypes = {
  todo: PropTypes.objectOf,
  handleChangesMade: PropTypes.func.isRequired,
  deletedProps: PropTypes.func.isRequired,
};

export default ToDoItem;

ToDoItem.defaultProps = {
  todo: {},
};
