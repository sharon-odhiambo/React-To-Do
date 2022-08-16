import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleChangesMade={handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}
ToDoList.propTypes = {
  todos: PropTypes.arrayOf,
  handleChangeProps: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  todos: [],
};
