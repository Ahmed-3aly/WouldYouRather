import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PercentBar extends Component {
    static propTypes = {
        Overlay: PropTypes.string.isRequired,
        Percent: PropTypes.number.isRequired,
    }
    render() {
        const {
            Overlay,
            Percent,
        } = this.props
        return (
            <div
                className='PercentBar'
            >
                <progress
                    max="100"
                    value={Percent}
                />
                <div>
                    <div>
                        {Percent}%
                    </div>
                    <div>
                        {Overlay}
                    </div>
                </div>
            </div>
        )
    }
}

export default PercentBar
