import React from 'react';
import { connect } from 'react-redux';

const Todo = (props) => {
    return (
        <label className="todoList">
            {props.name}
            {props.age}
        </label>
    );
};

export default connect(
    (state) => ({
        todos: state.person
    }),
)(Todo);
