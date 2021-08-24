import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';

class Begin extends Component {
  // state = {  }
  render() { 
    return <h1>Begin</h1>;
  }
}

class App extends Component {
  state = {  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavLink to='/' exact>Begin</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/signin'>Sign In</NavLink>
        </header>
        <section className='main'>
          <Switch>
            <Route exact path='/' component={Begin} />
            <Route path='/signup'>
              <Auth type='signup' />
            </Route>
            <Route path='/signin'>
              <Auth type='signin' />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    )
  }
}

export default App;