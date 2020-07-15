import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleLogout } from '../Actions/shared.js';

class UserPanel extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        AuthUser: PropTypes.object.isRequired,
    }
    state = {
        redirect: false
    }
    onLogout(This) {
        const { dispatch } = This.props
        dispatch(handleLogout())
        This.setState({ redirect: true })
    }
    render() {
        const { AuthUser } = this.props
        const { redirect } = this.state
        const Link = 'Logout'
        if (redirect) {
            return <Redirect to={window.location} push={true} />
        }
        return (
            <div
                className='Flex_X UserPanel'
            >
                <div>
                    {'Welcome ' + AuthUser.Name}
                </div>
                <button
                    className='Fill_Y Flex'
                    onClick={() => this.onLogout(this)}
                >
                    {Link}
                </button>
            </div>
        );
    }
}

function mapStateToProps({
    dispatch,
    AuthUser,
    Users
}) {
    const authUser = Users.find(x => x.Id === AuthUser.Id)
    return {
        dispatch: dispatch,
        AuthUser: authUser,
    }
}

export default connect(mapStateToProps)(UserPanel)
