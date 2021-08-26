import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import ToDos from './ToDos.js';

class Begin extends Component {
  // state = {  }
  render() { 
    return <h1>Begin</h1>;
  }
}

class App extends Component {
  state = { token: localStorage.getItem('TOKEN') };
  setToken = (value) => {
      this.setState({ token: value });
  };

  render() {
    return (
      <BrowserRouter>

        <header>
          <NavLink to='/' exact>Begin</NavLink>
            {this.state.token && (
              <NavLink to='/todos'>ToDo List</NavLink>
            )}
            {!this.state.token && (
              <>
                  <NavLink to='/signup'>Sign Up</NavLink>
                  <NavLink to='/signin'>Sign In</NavLink>
              </>
            )}
            {/* <div className='headerToken'>
                ISSUED TOKEN:
                { this.state.token && this.state.token.toString() }
            </div> */}
        </header>

        <section className='main'>
          <Switch>
            <Route exact path='/' component={Begin} />

              <Route
                path='/signin'
                render={ (routerProps) => (
                  <Auth
                    setToken={this.setToken}
                    type='signin' {...routerProps}
                  />
                )}
              />

              <Route
                path='/signup'
                render={ (routerProps) => (
                  <Auth
                    setToken={this.setToken}
                    type="signup" {...routerProps}
                  />
                )}
              />

              <Route
                path='/todos'
                // if token issued then list ToDos, otherwise redirect to sign in
                render={ (routerProps) =>
                  this.state.token ? (
                    <ToDos token={this.state.token} {...routerProps} />
                  ) : (
                    <Redirect to='/signin' />
                  )
                }
              />

          </Switch>
        </section>

      </BrowserRouter>
    )
  }
}

export default App;