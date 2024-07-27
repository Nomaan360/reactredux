import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = ({ todosA, removeTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todosA.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todosA: state.todosA
});

export default connect(mapStateToProps, { removeTodo })(TodoList);
