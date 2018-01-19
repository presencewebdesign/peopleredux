import React from 'react';
import { connect } from 'react-redux';
import Input from './form/Input';
import AddHobby from './AddHobby';
import * as actions from '../actions';

const Todo = props => (
<div>
    <label className="todoList">
        <div>
            Name:
            <Input
                name="updatename"
                type="text"
                state={this.state}
                control={this.control}
                value={props.name}
                placeholder={props.name}
                onChange={(e) => {
                    props.dispatch(actions.updatePerson(props.id, props.age, e.target.value));
                }}
            />
        </div>
        <div>
            Age:
            <Input
                name="updateage"
                type="text"
                state={this.state}
                control={this.control}
                value={props.age}
                placeholder={props.age}
                onChange={(e) => {
                    props.dispatch(actions.updatePerson(props.id, e.target.value, props.name));
                }}
            />
    </div>
        <AddHobby
            id={props.id}
        />
    </label>
</div>

);

export default connect(
    state => ({
        person: state.person,
    }), dispatch => ({
        dispatch,
    }),
)(Todo);
