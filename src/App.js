import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {CharacterCounter,TextInput} from './CharacterCounter';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const App = () => (
  <>
  <Provider store={store}>
    <div>
      <h1> Counter App</h1>
      <Home />
      <AddTodo />
      <TodoList />
    </div>
  </Provider>

  <RecoilRoot>
  <CharacterCounter />
  </RecoilRoot>
  </>
);

export default App;