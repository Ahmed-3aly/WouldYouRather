import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../Actions/shared.js'

class Login extends Component {
    static propTypes = {
        Users: PropTypes.array.isRequired,
    }
    state = {
        UserId: -1
    }
    onSignin(e) {
        handleLogin(e)
        const loc = window.location;
        window.location = loc;
    }
    onChange(e) {
        this.setState({UserId: e})
    }
    canSignin() {
        return this.state.UserId === -1
    }
    render() {
        const { Users } = this.props
        return (
            <div
                className="Flex_Y Login"
            >
                <h2>
                    Welcome to the Would You Rather App!
                </h2>
                <div>
                    Please sign in to continue
                </div>
                <select
                    className="Input"
                    onChange={(e) => this.onChange(e.target.value)}
                    value={this.state.UserId}
                >
                    <option key="-1" value="-1" disabled></option>
                    {Users.map(x => (
                        <option
                            key={x.Id}
                            value={x.Id}
                        >
                            {x.Name}
                        </option>
                    ))}
                </select>
                <button
                    className="Input"
                    disabled={this.canSignin()}
                    onClick={() => this.onSignin(this.state.UserId)}
                >
                    Sign in
                </button>
            </div>
        );
    }
}

function mapStateToProps({ Users }) {
    return {
        Users
    }
}

export default connect(mapStateToProps)(Login)
