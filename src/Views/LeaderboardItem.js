import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Avatar from 'react-avatar';

class LeaderboardItem extends Component {
    static propTypes = {
        Item: PropTypes.object.isRequired,
    }
    render() {
        const {
            Item,
        } = this.props
        return (
            <div
                className='Fill Flex_X Leaderboard'
            >
				<Avatar name={Item.Name} />
                <div
                    className='Flex_Y Mid'
                >
                    <h3>
                        {Item.Name}
                    </h3>
                    <div>
                        Answered Questions
                    </div>
                    <div>
                        Created Questions
                    </div>
                    <div>
                        Score
                    </div>
                </div>
                <div
                    className='Flex_Y End'
                >
                    <h3>
                        ^
                    </h3>
                    <div>
                        {Item.Answers}
                    </div>
                    <div>
                        {Item.Polls}
                    </div>
                    <div>
                        {Item.Score}
                    </div>
                </div>
            </div>

        )
    }
}

export default LeaderboardItem
