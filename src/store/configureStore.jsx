import { compose, createStore, combineReducers } from 'redux';
import { personReducer, searchTextReducer, setTodoReducer } from '../reducers/index';

export default () => {
    const reducer = combineReducers({
        addPerson: personReducer,
        setSearchText: searchTextReducer,
        settodo: setTodoReducer,
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};