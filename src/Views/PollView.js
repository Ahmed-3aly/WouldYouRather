import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollList from './PollList.js';

class PollView extends Component {
    static propTypes = {
        AuthUser: PropTypes.object.isRequired,
        Users: PropTypes.array.isRequired,
        Polls: PropTypes.array.isRequired,
        Answers: PropTypes.array.isRequired,
    }
    state = {
        v: 1
    }
    handleOptionChange = (v) => {
        this.setState({ v: v })
    }
    render() {
        const {
            AuthUser,
            Users,
			Polls,
            Answers
        } = this.props
        const AnsweredIds = Answers.filter(x =>
            x.UserId === AuthUser.Id
        ).map(x =>
            x.PollId
        )
        const Items = Polls.filter(x =>
            this.state.v === 1
                ? !AnsweredIds.includes(x.Id)
                : AnsweredIds.includes(x.Id)
        )
        return (
            <div
                className='PollView'
            >
                <div
                    className='Flex_X PollCategories'
                >
                    <button
                        disabled={this.state.v === 1}
                        onClick={() => this.handleOptionChange(1)}
                    >Unanswered</button>
                    <button
                        disabled={this.state.v === 2}
                        onClick={() => this.handleOptionChange(2)}
                     >Answered</button>
                    </div>
                <PollList
                    AuthUser={AuthUser}
                    Users={Users}
                    Polls={Items}
                />
            </div>
        )
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

export default connect(mapStateToProps)(PollView)
