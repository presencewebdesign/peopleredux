import React from 'react';
import { connect } from 'react-redux';

const Hobby = props => (
    <div>
        <strong>Hobby</strong>
        <ol>
            <li>{props.name}</li>
        </ol>
    </div>
);

export default connect(
    state => ({
        person: state.person,
    }), dispatch => ({
        dispatch,
    }),
)(Hobby);
