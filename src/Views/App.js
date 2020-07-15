import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { handleInit } from '../Actions/shared.js';
import '../Styles/App.css';
import Dashboard from './Dashboard.js';
import Error from './Error.js';
import LeaderboardList from './LeaderboardList.js';
import Login from './Login.js';
import PollCreate from './PollCreate.js';
import PollDetails from './PollDetails.js';
import PollView from './PollView.js';
import UserPanel from './UserPanel.js';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInit())
    }
    render() {
        const {
            Ready
        } = this.props
        return (
            <BrowserRouter>
                <div className="App">
                    {Ready === false &&
                        <Route component={Login} />
                    }
                    {Ready &&
                        <div>
                            <div
                                className='Top'
                            >
                                <Dashboard />
                                <UserPanel />
                            </div>
                            <Switch>
                                <Route
                                    exact path='/'
                                    component={PollView}
                                />
                                <Route
                                    exact path='/add'
                                    component={PollCreate}
                                />
                                <Route
                                    exact path='/leaderboard'
                                    component={LeaderboardList}
                                />
                                <Route
                                    path='/questions/:question_id'
                                    render={({ history }) => (
                                        <PollDetails />
                                    )}
                                />
                                <Route
                                    path='*'
                                    component={Error}
                                />
                            </Switch>
                        </div>
                    }
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ AuthUser }) {
    return {
        Ready: AuthUser.Ready
    }
}

export default connect(mapStateToProps)(App)
