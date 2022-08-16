import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    return (
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
  }
}
ToDoList.propTypes = {
  todos: PropTypes.arrayOf,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  todos: [],
};
