import React, { Component } from 'react';

class ToDos extends Component {
    state = {  };

    // call the server /api/todos with the JWT from localStorage
    render() {
        return (
            <>
                <h1>User ToDo List</h1>
            </>
        );
    }
}

export default ToDos;