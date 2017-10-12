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
                        name="updatename"
                        type="text"
                        state={this.state}
                        control={this.control}
                        value={props.name}
                        placeholder="Update Name"
                        onChange={(e) => {
                            props.dispatch(actions.updatePerson(props.id, props.age, e.target.value));
                        }}
                    />
                    <Input
                        name="updateage"
                        type="text"
                        state={this.state}
                        control={this.control}
                        value={props.age}
                        placeholder="Update Age"
                        onChange={(e) => {
                            props.dispatch(actions.updatePerson(props.id, e.target.value, props.name));
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
