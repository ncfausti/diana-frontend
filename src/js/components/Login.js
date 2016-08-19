// components/Login.js
import React from 'react'

export default class Login extends React.Component{
  render() {
    return (
    <div class="container">
	    <div class="row login">
		    <div class="col-md-4">
		      <form class="form-signin" onSubmit={this.handleSubmit}>
		        <h2 class="form-signin-heading">Please sign in</h2>
		        <label for="inputEmail" class="sr-only">Email address</label>
		        <input type="email" id="inputEmail" ref="email" class="form-control" placeholder="Email" required ></input>
		        <label for="inputPassword" class="sr-only">Password</label>
		        <input type="password" id="inputPassword" ref="pass" class="form-control" placeholder="Password" required></input>
		        <div class="checkbox">
		          <label>
		            <input type="checkbox" value="remember-me"></input> Remember me
		          </label>
		        </div>
		        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            {this.state.error && (<p>Incorrect login</p>)}
		      </form>
		    </div>
	    </div>
    </div>
    	)
  }
}
