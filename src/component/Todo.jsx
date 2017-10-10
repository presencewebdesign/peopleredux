import React from 'react';
import { connect } from 'react-redux';

const Todo = (props) => {
    return (
        <label className="todoList">
            <div>
                Name: {props.name}
            </div>
            <div>
                Age: {props.age}
            </div>
        </label>
    );
};

export default connect(
    (state) => ({
        todos: state.person
    }),
)(Todo);
