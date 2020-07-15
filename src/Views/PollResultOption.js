import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PercentBar from './PercentBar.js';

class PollResultOption extends Component {
    static propTypes = {
        IsUserAnswer: PropTypes.bool.isRequired,
        Text: PropTypes.string.isRequired,
        Votes: PropTypes.number.isRequired,
        TotalVotes: PropTypes.number.isRequired,
    }
    render() {
        const {
            IsUserAnswer,
            Text,
            Votes,
            TotalVotes
        } = this.props
        const Percent = parseInt(
            (100 * Votes / TotalVotes),
            10
        );
        const Overlay = IsUserAnswer ?
            "Your Answer" :
            ""
        return (
            <div>
                <div>
                    {Text}
                </div>
                <PercentBar
                    Overlay={Overlay}
                    Percent={Percent}
                />
                <div>
                    {Votes} out of {TotalVotes} votes
                </div>
            </div>
        )
    }
}

export default PollResultOption
