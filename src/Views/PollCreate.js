import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleCreate } from '../Actions/shared.js';

class PollCreate extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        AuthUser: PropTypes.object.isRequired,
    }
    state = {
        O_1: "",
        O_2: "",
        redirect: false
    }
    isDisabled = () => {
        const { O_1, O_2 } = this.state;
        return O_1 === '' || O_2 === '';
    };
    onChange = event => {
        const { name, value } = event.target;
        this.setState(prev => ({
            ...prev,
            [name]: value,
        }));
    }
    handleFormSubmit = (e) => {
        const { dispatch, AuthUser } = this.props
        const { O_1, O_2 } = this.state
        e.preventDefault()
        dispatch(handleCreate(
            AuthUser.Id,
            O_1,
            O_2
        ))
        this.setState((prev) => ({
            ...prev,
            redirect: true
        }))
    }
    render() {
        const { AuthUser } = this.props
        const { O_1, O_2, redirect } = this.state
        if (AuthUser === null) {
            return null;
        }
        if (redirect) {
            return <Redirect to="/" push={true} />
        }
        return (
            <form
                className='Flex_Y PollCreate'
                onSubmit={this.handleFormSubmit}
            >
                <h2>
                    Create New Question
                </h2>
                <div
                    className="Input"
                >
                    Would you rather...
                </div>
                <input
                    className="Input"
                    type='text'
                    placeholder='Option 1'
                    name="O_1"
                    value={O_1}
                    onChange={this.onChange}
                >
                </input>
                <input
                    className="Input"
                    type='text'
                    placeholder='Option 2'
                    name="O_2"
                    value={O_2}
                    onChange={this.onChange}
                >
                </input>
                <button
                    className="Input"
                    type="submit"
                    disabled={this.isDisabled()}
                >
                    Submit
                </button>
            </form>
        );
    }
}

function mapStateToProps({
    dispatch,
    AuthUser,
    Users
}) {
    const authUser = Users.find(x => x.Id === AuthUser.Id)
    return {
        dispatch: dispatch,
        AuthUser: authUser,
    }
}

export default connect(mapStateToProps)(PollCreate)
