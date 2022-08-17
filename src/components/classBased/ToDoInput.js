import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv4();
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(id, title);
    }
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name="title" value={title} onChange={this.onChange} />
        <button type="submit">
          <FaPlusCircle />
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
