import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoApi from './api/TodoApi';
const TodoList = (props) => {
    const { person, searchText } = props;
    const renderPersons = () => TodoApi.getPersons(
        person, searchText,
    ).map(person => (
        <Todo
            key={person.id}
            {...person}
        />
    ));
    return (
        <div>
            {renderPersons()}
        </div>
    );
};

export default connect(
    (state) => {
        return{
            person: state.person,
            searchText: state.searchText,
        };
    }
)(TodoList);
