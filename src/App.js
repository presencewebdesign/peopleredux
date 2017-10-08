import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/TodoApp';
import TodoApi from './component/api/TodoApi';
import configureStore from './store/configureStore';
import './App.css';
import './foundation.min.css';

const store = configureStore();

// Subscribe to changes
store.subscribe(() => {
    const state = store.getState();
    console.log('New state', store.getState());
    TodoApi.setTodos(state.person);
});

// const initialTodos = TodoApi.getPersons();
// store.dispatch(actions.addPerson(initialTodos));


export default function App() {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
}
