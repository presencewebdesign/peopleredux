import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-foundation';
import Input from './form/Input';
import Hobby from './Hobby';
import * as actions from '../actions';

class AddHobby extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.setHobby.length > 0) {
            console.log(this.props.id);
            this.props.dispatch(actions.addHobby(
                this.props.id,
                this.props.setHobby,
            ));
        }
    }
    render() {
        return (
          <div className="panel">
              {Object.keys(this.props.addPerson).map((key) => {
                    const hobbies = this.props.addPerson[key].hobbies;
                    console.log(hobbies);
                    return {
                        ...hobbies,
                        name: key,
                    };
                }).map(hobbies => (
                    <Hobby
                        key={hobbies.id}
                        {...hobbies}
                    />
                ))}
              <label>
                    Hobbies
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            name="hobby"
                            type="text"
                            state={this.state}
                            value={this.props.setHobby}
                            control={this.control}
                            onChange={(e) => {
                                this.props.dispatch(actions.setHobby(e.target.value));
                            }}
                        />
                      <Button type="submit">Add Hobby</Button>
                    </form>
                </label>
            </div>
        );
    }
}

export default connect(
    state => ({
        setHobby: state.setHobby,
        addPerson: state.addPerson,
    }),
)(AddHobby);
