import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { formatDate } from '../Utils/helpers.js'
import { NavLink } from 'react-router-dom';

class PollItem extends Component {
    static propTypes = {
        Author: PropTypes.object.isRequired,
        Poll: PropTypes.object.isRequired,
    }
    render() {
        const {
            Author,
            Poll,
        } = this.props
        const Head = Author.Name + " asks:"
        const Body = Poll.Answers[0] + "..."
        return (
            <div
                className='Flex_Y PollItem'
            >
                <h3>
                    {Head}
                </h3>
                <div
                    className='Flex_X PollCard'
                >
					<Avatar name={Author.Name} />
                    <div
                        className='Flex_Y'
                    >
                        <div>
                            {formatDate(Poll.On)}
                        </div>
                        <h3>
                            Would you rather...
                        </h3>
                        <div>
                            {Body}
                        </div>
                        <NavLink
                            to={'/questions/' + Poll.Id}
                        >
                            View Poll
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollItem
