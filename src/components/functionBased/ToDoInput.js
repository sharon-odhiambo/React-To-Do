import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    const id = uuidv4();
    addTodoProps(id, inputText.title);
    setInputText({
      title: 'ABC',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." name="title" value={inputText.title} onChange={onChange} />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
