import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Row, Column } from 'react-foundation';
import TodoList from './TodoList';
import Input from './form/Input';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.setName.length > 0 && this.props.setAge.length > 0) {
            this.props.dispatch(actions.addPerson({
                name: this.props.setName,
                age: this.props.setAge,
            }));
        }
    }
    render() {
        return (
            <div>
                <div className="grid-center-example">
                    <div className="container">
                        <h1 className="page-title">Person App</h1>
                        <Row className="display">
                            <Column small={11} medium={6} large={5}>
                                <Input
                                    name="searchText"
                                    type="text"
                                    state={this.state}
                                    placeholder="Search Todos..."
                                    onChange={(e) => {
                                        this.props.dispatch(actions.setSearchText(e.target.value));
                                    }}
                                />
                                <form onSubmit={this.handleSubmit}>
                                    <Input
                                        name="name"
                                        type="text"
                                        state={this.state}
                                        placeholder="Enter Name"
                                        onChange={(e) => {
                                            this.props.dispatch(actions.setName(e.target.value));
                                        }}
                                    />
                                    <Input
                                        name="age"
                                        type="text"
                                        state={this.state}
                                        placeholder="Enter Age"
                                        onChange={(e) => {
                                            this.props.dispatch(actions.setAge(e.target.value));
                                        }}
                                    />
                                    <Button type="submit">Add Person</Button>
                                </form>
                                <TodoList />
                            </Column>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    (state) => ({
            setName: state.setName,
            setAge: state.setAge,
        }),
    dispatch => ({
        dispatch,
    }),
)(TodoApp);
