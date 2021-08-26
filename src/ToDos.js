import React, { Component } from 'react';
import { getTodos } from './fetch-utils.js';
import './ToDos.css';

class ToDos extends Component {
    state = { todos: [] };

    componentDidMount = () => {
        this.fetchTodos();
    };

    fetchTodos = async () => {
        // outsource the fetch by calling getTodos from fetch-utils.js
        const data = await getTodos(this.props.token);
        // set the todos in state
        this.setState({ todos: data });
    };    

    // call the server /api/todos with the JWT from localStorage
    render() {
        return (
            <>
                <h1>User ToDo List</h1>
                {this.state.todos.map((todo) => (
                    <div className='todo-item' key={todo.id}>
                        <input type='checkbox' checked={todo.completed} />
                        <label>{todo.todo}</label>
                    </div>
                ))}
            </>
        );
    }
}

export default ToDos;