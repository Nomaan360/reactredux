import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);