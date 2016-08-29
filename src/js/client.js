import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layouts.js';
//import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Details from './components/Details.js';
import Submissions from './components/Submissions.js';
import BugTable from './components/BugTable.js';
import DetailsLink from './components/BugTable/DetailsLink.js';
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
          this.props.router.replace('/dashboard')
        }
      })
    },

    render() {
      return (



        <div class="container">
	    <div class="row login">
	    <div class="col-md-4"></div>
		    <div class="col-md-4 login-box">
        <span class="praetorian-login">PRAETORIAN</span>
		      <form class="form-signin" onSubmit={this.handleSubmit}>
		        <label for="inputEmail" class="sr-only">Email address</label>
		       <span class="form-signin-span"><input type="email" id="inputEmail" ref="email" class="form-control" placeholder="Email" required ></input></span>
		        <label for="inputPassword" class="sr-only">Password</label>
		        <span class="form-signin-span"><input type="password" id="inputPassword" ref="pass" class="form-control" placeholder="Password" required></input></span>
		        <div class="checkbox">
		          <label>
              <input type="checkbox" name="remember-me"></input><span class="checkbox-material"><span class="check"></span></span> <span class="remember-login-label"> Stay logged in</span>
              </label>
		        </div>
            <button class="btn-sign-in" type="submit">Sign in</button>
		        <button class="btn-sign-in-white">Request Access</button>
            {this.state.error && (<p>Incorrect login</p>)}
		      </form>
		    </div>
	    <div class="col-md-4"></div>

	    </div>
    </div>


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
				<Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
				<Route path="submissions" component={BugTable} onEnter={requireAuth} />
        <Route path="submissions/:submissionID" component={Details} onEnter={requireAuth} />
			</Route>
	</Router>, document.getElementById('app'));