import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
                <Footer />
            </div>
        )
    }
}

export default App
