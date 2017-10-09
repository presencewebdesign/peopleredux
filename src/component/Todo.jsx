import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const Todo = (props) => {
    const renderDate = () => {
        let message = 'Created ';
        let timestamp = props.createdAt;

        if (props.completed) {
            message = 'Completed ';
            timestamp = props.createdAt;
        }
        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <label className="todoList">
          {props.text}
          <p className="date">{renderDate()}</p>
        </label>
    );
};

export default connect(
    (state) => ({
            todos: state.person
        }),
)(Todo);
