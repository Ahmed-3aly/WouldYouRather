import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { handleAnswer } from '../Actions/shared.js';

class PollAnswer extends Component {
    static propTypes = {
        AuthUser: PropTypes.object.isRequired,
        Author: PropTypes.object.isRequired,
        Poll: PropTypes.object.isRequired,
    }
    state = { v: 0 }
    handleOptionChange = (e) => {
        const v = parseInt(e.target.value)
        this.setState({ v: v })
    }
    handleFormSubmit = (e) => {
        const {
            AuthUser,
            Poll,
            dispatch
        } = this.props
        e.preventDefault()
        dispatch(handleAnswer(
            AuthUser.Id,
            Poll.Id,
            this.state.v
        ))
    }
    render() {
        const {
            Author,
            Poll,
        } = this.props
        return (
            <div
                className='Flex PollAnswer'
            >
                <div
                    className='Flex_Y'
                >
                    <h3>
                        Asked by {Author.Name}
                    </h3>
                    <div
                        className='Flex_X'
                    >
				        <Avatar name={Author.Name} />
                        <form
                            className='Flex_Y'
                            onSubmit={this.handleFormSubmit}
                        >
                            <div className="radio" >
                                <label>
                                    <input
                                        type="radio"
                                        value={1}
                                        checked={this.state.v === 1}
                                        onChange={this.handleOptionChange}
                                    />
                                    {Poll.Answers[0]}
                                </label>
                            </div>
                            <div className="radio" >
                                <label>
                                    <input
                                        type="radio"
                                        value={2}
                                        checked={this.state.v === 2}
                                        onChange={this.handleOptionChange}
                                    />
                                    {Poll.Answers[1]}
                                </label>
                            </div>
                            <button
                                disabled={this.state.v < 1}
                                className="btn btn-default"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({
    dispatch
}) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps)(PollAnswer)
