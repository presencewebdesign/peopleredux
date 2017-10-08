export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_SEARCH_TEXT':
        return action.searchText;
    default:
        return state;
    }
};
export const setTodoReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_NEW_TODO':
        return action.setTodo;
    default:
        return state;
    }
};
// Add Person
let personId = 1;
export const personReducer = (state = {}, action) => {

    switch (action.type) {
    case 'ADD_PERSON':
        return {
            ...state,
            [personId++]: {
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
