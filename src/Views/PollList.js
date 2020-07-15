import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PollItem from './PollItem.js';

class PollList extends Component {
    static propTypes = {
        Users: PropTypes.array.isRequired,
        Polls: PropTypes.array.isRequired,
    }
    render() {
        const {
            Users,
			Polls,
        } = this.props
        const polls = Polls
        polls.sort((a, b) => {
            return b.On - a.On
        })
        return (
            <ul
                className='Flex_Y PollList'
            >
                {polls.map(x => (
                    <li
                        key={x.Id}
                    >
                        <PollItem
                            Author={Users.find(y => y.Id === x.AuthorId)}
                            Poll={x}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}

export default PollList
