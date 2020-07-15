import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Avatar from 'react-avatar';
import PollResultOption from './PollResultOption';

class PollResult extends Component {
    static propTypes = {
        AuthUser: PropTypes.object.isRequired,
        Author: PropTypes.object.isRequired,
        Poll: PropTypes.object.isRequired,
        Answers: PropTypes.array.isRequired,
    }
    render() {
        const {
            AuthUser,
            Author,
            Poll,
            Answers
        } = this.props
        console.log(this.props)
        const answer = Answers.find(x =>
            x.UserId === AuthUser.Id
        ).AnswerId
        const answer_1 = answer === 1
        const answer_2 = answer === 2
        const votes = Answers.length
        const votes_1 = Answers.filter(x =>
            x.AnswerId === 1
        ).length
        const votes_2 = Answers.filter(x =>
            x.AnswerId === 2
        ).length
        return (
            <div
                className='Flex PollResult'
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
                        <div
                            className='Flex_Y'
                        >
                            <PollResultOption
                                IsUserAnswer={answer_1}
                                Text={Poll.Answers[0]}
                                Votes={votes_1}
                                TotalVotes={votes}
                            />
                            <PollResultOption
                                IsUserAnswer={answer_2}
                                Text={Poll.Answers[1]}
                                Votes={votes_2}
                                TotalVotes={votes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollResult
