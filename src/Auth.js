import React, { Component } from 'react';
import { getToken } from './fetch-utils.js';

class Auth extends Component {
    state = { email: '', password: '' };
    targetType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        // call targetToken with email, password, and type
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        this.props.setToken(token);

        // redirect to /todos
        this.props.history.push('/todos');
    };

    render() { 
        return (
            <>
                <h1>{ this.targetType() }</h1>
                <form onSubmit={this.handleSubmit}>
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
                    <button>{ this.targetType() }</button>
                </form>
            </>
        );
    }
}
 
export default Auth;