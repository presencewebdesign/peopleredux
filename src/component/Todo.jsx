import React from 'react';
import { connect } from 'react-redux';
import Input from './form/Input';
import * as actions from '../actions';
const Todo = (props) => {
    return (
        <div>
            <label className="todoList">
                <div>
                    Name: {props.name}
                </div>
                <div>
                    Age: {props.age}
                </div>
                    <Input
                        name="updateage"
                        type="text"
                        state={this.state}
                        control={this.control}
                        value={props.age}
                        placeholder="Update Age"
                        onChange={(e) => {
                            props.dispatch(actions.UpdateAge(props.id, props.name, e.target.value));
                        }}
                    />
                </label>
            </div>

    );
};

export default connect(
    (state) => ({
        person: state.person,
    }),(dispatch) => ({
        dispatch
    })
)(Todo);
