import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layouts.js';
//import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Details from './components/Details.js';
import Submissions from './components/Submissions.js';
import BugTable from './components/BugTable.js';

import { Router, Route, Link, withRouter, IndexRoute, browserHistory, hashHistory } from 'react-router';

import withExampleBasename from './withExampleBasename'
import auth from './auth'

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
})

const Login = withRouter(
  React.createClass({

    getInitialState() {
      return {
        error: false
      }
    },

    handleSubmit(event) {
      event.preventDefault()

      const email = this.refs.email.value
      const pass = this.refs.pass.value

      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
          <button type="submit">login</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
      )
    }
  })
)


const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <div><p>You are now logged out</p><Link to="/">Sign in</Link> </div>
  }
})


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


ReactDOM.render(
	<Router history={hashHistory}>
			<Route path="/login" component={Login} />
			<Route path="/logout" component={Logout} />

			<Route path="/" component={Layout} onEnter={requireAuth}>
				<IndexRoute component={Dashboard} onEnter={requireAuth} />
				<Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
				<Route path="/submissions" component={BugTable} onEnter={requireAuth} />
				<Route path="/details" component={Details} onEnter={requireAuth}/>\
			</Route>
	</Router>, document.getElementById('app'));