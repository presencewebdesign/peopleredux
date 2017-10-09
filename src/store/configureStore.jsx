import { compose, createStore, combineReducers } from 'redux';
import { personReducer, searchTextReducer, setNameReducer, setAgeReducer, getPersonsReducer } from '../reducers/index';

export default () => {
    const reducer = combineReducers({
        addPerson: personReducer,
        setSearchText: searchTextReducer,
        setName: setNameReducer,
        setAge: setAgeReducer,
        getPersons: getPersonsReducer,
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};