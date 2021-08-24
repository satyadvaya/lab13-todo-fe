import React, { Component } from 'react';

class Auth extends Component {
    state = { email: '', password: '' };
    getType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };

    render() { 
        return (
            <>
                <h1>{ this.getType() }</h1>
                <form>
                    <div className='form-control'>
                        <label>Email: </label>
                        <input
                            type='email'
                            onChange={ (event) => {
                                this.setState({ email: event.target.value })
                            }}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Password: </label>
                        <input
                            type='password'
                            onChange={ (event) => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                    </div>
                    <button>{ this.getType() }</button>
                </form>
            </>
        );
    }
}
 
export default Auth;