import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
// import TodoApi from './api/TodoApi';

const TodoList = (props) => {
    // const { person, searchText } = props;
    // const renderPersons = () => TodoApi.getPersons(
    //     person, searchText,
    // ).map(person => (
    //     <Todo
    //         key={person.id}
    //         {...person}
    //     />
    // ));
    return (
        <div>
            {Object.keys(props.addPerson).map(key => {
                const person = props.addPerson[key];
                return {
                    ...person,
                    id: key,
                };
            })
            .filter(person => {
                const name = person.name.toLowerCase();
                return props.searchText.length === 0 || name.indexOf(props.searchText) > -1;
            })
            .map(person => (
                <Todo
                    key={person.id}
                    {...person}
                />
            ))}
        </div>
    );
};

export default connect(
    (state) => {
        return{
            person: state.person,
            searchText: state.setSearchText,
            addPerson: state.addPerson,
        };
    }
)(TodoList);
