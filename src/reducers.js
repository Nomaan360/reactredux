const initialState = {
  // count: 0,
  todosA: []
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todosA: [...state.todosA, { id: Date.now(), text: action.payload.text }]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todosA: state.todosA.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;