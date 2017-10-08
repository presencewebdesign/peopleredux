export const setTodo = (setTodo) => {
    return {
        type: 'SET_NEW_TODO',
        setTodo
    };
};
export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
export const addPerson = ({ name, age }) => {
    return {
        type: 'ADD_PERSON',
        name,
        age,
    }
};
export const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};
export const addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
export const removeHobby = (hobby) => {
    return {
        type: 'REMOVE_HOBBY',
        hobby
    }
};
export const addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};
export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};