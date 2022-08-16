import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default class ToDoItem extends React.PureComponent {
  render() {
    const { todo, handleChangesMade, deletedProps } = this.props;
    return (
      <li key={todo.id} className={todo.completed ? 'checked' : null}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangesMade(todo.id)}
        />
        {todo.title}
        <button type="button" onClick={() => deletedProps(todo.id)}>
          <FaTrash />
        </button>
      </li>
    );
  }
}
ToDoItem.propTypes = {
  todo: PropTypes.objectOf,
  handleChangesMade: PropTypes.func.isRequired,
  deletedProps: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  todo: {},
};
