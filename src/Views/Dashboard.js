import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

const Views = [
    {
        Name: "Home",
        Path: "/",
    },
    {
        Name: "New Question",
        Path: "/add",
    },
    {
        Name: "Leader Board",
        Path: "/leaderboard",
    },
]

class Dashboard extends Component {
    static propTypes = {
        AuthUser: PropTypes.object.isRequired,
    }
    render() {
        const { AuthUser } = this.props
        return (
            <ul
                className="Fill Flex_X Dashboard"
            >
                {
                    AuthUser.Ready &&
                    Views.map(
                        (x) => (
                            <li
                                key={x.Path}
                                className="Fill_Y Flex"
                            >
                                <NavLink
                                    className="Fill_Y Flex"
                                    to={x.Path} exact
                                    activeClassName='active'
                                >
                                    {x.Name}
                                </NavLink>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

function mapStateToProps({ AuthUser }) {
    return {
        AuthUser
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
