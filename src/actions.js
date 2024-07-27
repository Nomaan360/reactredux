export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const decrement = () => ({
    type: 'DECREMENT'
  });
  
  export const addTodo = text => ({
    type: 'ADD_TODO',
    payload: {
      text
    }
  });
  
  export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload: {
      id
    }
  });