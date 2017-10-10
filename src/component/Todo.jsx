import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
