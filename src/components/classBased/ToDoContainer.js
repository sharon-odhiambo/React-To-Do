import React from 'react';
import ToDoList from './ToDoList';
import InputTodo from './ToDoInput';

export default class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
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

  addTodoItem = (id, title, completed = false) => {
    const { todos } = this.state;
    const newTodo = {
      id, title, completed,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <InputTodo addTodoProps={this.addTodoItem} />
        <ToDoList
          todos={todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </>
    );
  }
}
