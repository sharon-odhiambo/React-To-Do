import React from 'react';
import PropTypes from 'prop-types';

export default class ToDoItem extends React.PureComponent {
  render() {
    const { todo, handleChangesMade } = this.props;
    return (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangesMade(todo.id)}
        />
        {todo.title}
      </li>
    );
  }
}
ToDoItem.propTypes = {
  todo: PropTypes.objectOf,
  handleChangesMade: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  todo: {},
};
