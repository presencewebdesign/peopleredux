export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_SEARCH_TEXT':
        return action.searchText;
    default:
        return state;
    }
};
export const setNameReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_NAME':
        return action.setName;
    default:
        return state;
    }
};
export const setAgeReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_AGE':
        return action.setAge;
    default:
        return state;
    }
};
export const getPersonsReducer = (state = '', action) => {
    switch (action.type) {
    case 'GET_PERSONS':
        return state.person;
    default:
        return state;
    }
};
export const updateAgeReducer = (state = '', action) => {
    switch (action.type) {
    case 'UPDATE_AGE':
        return {
            ...state,
            [action.id]: {
                age: action.age,
            },
        };
    default:
        return state;
    }
};
// Add Person
let personId = localStorage.getItem('newId') || 1;
export const personReducer = (state = {}, action) => {

    switch (action.type) {
    case 'ADD_PERSON':
    let newId = personId++;
    localStorage.setItem('newId', newId+1);

        return {
            ...state,
            [newId]: {
                name: action.name,
                age: action.age,
                hobbies: [],
                movies: [],
            },
        };
    case 'CHANGE_NAME':
        return {
            ...state,
            [action.id]: {
                name: action.name,
                age: action.age,
                hobbies: [],
                movies: [],
            },
        };
    case 'ADD_MOVIE':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                movies: [
                    ...state[action.id].movies,
                    action.movie,
                ],
            },
        };
    case 'REMOVE_MOVIE':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                movies: state[action.id].movies.filter((movie, index) => index !== action.movieId),
            },
        };
    case 'ADD_HOBBY':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                hobbies: [
                    ...state[action.id].hobbies,
                    action.hobby,
                ],
            },
        };
    case 'REMOVE_HOBBY':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                hobbies: state[action.id].hobbies.filter((hobby, index) => index !== action.hobbyId),
            },
        };
    default:
        return state;
    }
};
