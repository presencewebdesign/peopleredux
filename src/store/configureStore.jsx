import { compose, createStore, combineReducers } from 'redux';
import { personReducer, searchTextReducer, setNameReducer, setAgeReducer, getPersonsReducer, updateAgeReducer } from '../reducers/index';
import { loadState, saveState } from '@marmalade/session';
import throttle from 'lodash/throttle';

export default () => {
    const reducer = combineReducers({
        addPerson: personReducer,
        setSearchText: searchTextReducer,
        setName: setNameReducer,
        setAge: setAgeReducer,
        getPersons: getPersonsReducer,
        updateAge: updateAgeReducer,
    });

    const initialState = loadState('1.0');

    let store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    store.subscribe(throttle(() => {
        saveState(store,'1.0');
    }, 1000));

    return store;
};