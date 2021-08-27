import React, { Component } from 'react';
import { getTodos, createTodo, updateTodo } from './fetch-utils.js';
import './ToDos.css';

class ToDos extends Component {
    state = { todos: [], newTodo: '' };

    componentDidMount = () => {
        this.fetchTodos();
    };

    fetchTodos = async () => {
        // outsource the fetch by calling getTodos from fetch-utils.js
        const data = await getTodos(this.props.token);
        // set the todos in state
        this.setState({ todos: data });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = await createTodo(this.props.token, {
            todo: this.state.newTodo,
            completed: false
        });
        this.setState({ newTodo: '' });
        this.setState( (prevState) => ({
            todos: [...prevState.todos, data]
        }));
    };

    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        await updateTodo(this.props.token, todo);
        this.fetchTodos();
    };

    // call the server /api/todos with the JWT from localStorage
    render() {
        return (
            <>
                <h1>User ToDo List</h1>
                    <section className='todo-list'>
                        {this.state.todos.map( (todo) => (
                            <div className='todo-item' key={todo.id}>
                                <input 
                                    type='checkbox' 
                                    checked={todo.completed} 
                                    onChange={ () => this.handleCompleted(todo) } 
                                />
                                <label>{todo.todo}</label>
                            </div>
                        ))}
                    </section>
                    <section className='new-todo'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                value={this.state.newTodo}
                                type='text'
                                onChange={ (event) =>
                                    this.setState({ newTodo: event.target.value })
                                }
                            />
                            <button>Add ToDo</button>
                        </form>
                </section>
            </>
        );
    }
}

export default ToDos;