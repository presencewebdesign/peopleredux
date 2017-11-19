import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './form/Input';
import { Button } from 'react-foundation';
import * as actions from '../actions';

class AddHobby extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.setHobby.length > 0) {
            this.props.dispatch(actions.addHobby({
                hobby: this.props.setHobby,
            }));
        }
    }
    render() {
        return (
          <div>
              <label>Hobbies
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
    (state) => ({
            setHobby: state.setHobby,
        }),
)(AddHobby);
