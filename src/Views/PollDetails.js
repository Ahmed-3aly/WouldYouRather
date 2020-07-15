import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollAnswer from './PollAnswer.js';
import PollResult from './PollResult.js';
import Error from './Error.js'

class PollDetails extends Component {
    static propTypes = {
        AuthUser: PropTypes.object.isRequired,
        Users: PropTypes.array.isRequired,
        Polls: PropTypes.array.isRequired,
        Answers: PropTypes.array.isRequired,
    }
    render() {
        const {
            AuthUser,
            Users,
            Polls,
            Answers
        } = this.props
        const path = window.location.pathname
        const split = path.split('/')
        const pollId = split[2]
        const poll = Polls.find(x => x.Id === pollId)
        if (poll === null || typeof poll === 'undefined') {
            return <Error />
        }
        const author = Users.find(x => x.Id === poll.AuthorId)
        const answers = Answers.filter(x => x.PollId === poll.Id)
        const hasAnswer = answers.filter(x =>
            x.UserId === AuthUser.Id
        ).length > 0
        console.log({
            pl: poll,
            au: AuthUser.Id,
            as: answers,
            ha: hasAnswer
        })
        if (hasAnswer) {
            return (
                <PollResult
                    AuthUser={AuthUser}
                    Author={author}
                    Poll={poll}
                    Answers={answers}
                />
            )
        }
        else {
            return (
                <PollAnswer
                    AuthUser={AuthUser}
                    Author={author}
                    Poll={poll}
                />
            )
        }
    }
}

function mapStateToProps({
    AuthUser,
    Users,
    Polls,
    Answers
}) {
    const authUser = Users.find(x => x.Id === AuthUser.Id)
    return {
        AuthUser: authUser,
        Users: Users,
        Polls: Polls,
        Answers: Answers
    }
}

export default connect(mapStateToProps)(PollDetails)
