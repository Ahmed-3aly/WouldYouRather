import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem.js';

class LeaderboardList extends Component {
    static propTypes = {
        Users: PropTypes.array.isRequired,
        Polls: PropTypes.array.isRequired,
        Answers: PropTypes.array.isRequired,
    }
    render() {
        const {
            Users,
            Polls,
            Answers,
        } = this.props
        const Items = Users.map(z => {
            const answers = Answers.filter(x => x.UserId === z.Id).length;
            const polls = Polls.filter(x => x.AuthorId === z.Id).length;
            const score = answers + polls;
            return {
                Avatar: z.Avatar,
                Name: z.Name,
                Answers: answers,
                Polls: polls,
                Score: score
            }
        })
        Items.sort((a, b) => {
            return b.Score - a.Score
        });
        return (
            <ul
                className="LeaderboardList"
            >
                {
                    Items.map(
                        (x) => (
                            <li
                                key={x.Name}
                            >
                                <LeaderboardItem
                                    Item={x}
                                />
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

function mapStateToProps({
    Users,
    Polls,
    Answers
}) {
    return {
        Users,
        Polls,
        Answers
    }
}

export default connect(mapStateToProps)(LeaderboardList)
