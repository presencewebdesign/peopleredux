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
export const setHobbyReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_HOBBY':
        return action.setHobby;
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
// Add Person
let id = 0;
const newId = id++;

let personId = localStorage.getItem('newPersonId') || 1;
const newPersonId = personId++;
localStorage.setItem('newPersonId', newPersonId + 1);

let hobbyId = localStorage.getItem('newHobbyId') || 1;
const newHobbyId = hobbyId++;
localStorage.setItem('newHobbyId', hobbyId + 1);

export const personReducer = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_PERSON':
        return {
            ...state,
            [newPersonId]: {
                name: action.name,
                age: action.age,
                hobbies: [],
            },
        };
    case 'UPDATE_PERSON':
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
                [newId]: {
                    movies: [...state[action.id].movies, action.movie],
                },
            },
        };
    case 'REMOVE_MOVIE':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                movies: state[action.id].movies.filter(
                    (movie, index) => index !== action.movieId),
            },
        };
    case 'ADD_HOBBY':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                hobbies: [
                    ...state[action.id].hobbies,
                    {
                        id: newHobbyId,
                        name: action.name,
                    },
                ],
            },
        };
    case 'REMOVE_HOBBY':
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                hobbies: state[action.id].hobbies.filter((hobby, index) => index !== action.id),
            },
        };
    default:
        return state;
    }
};
