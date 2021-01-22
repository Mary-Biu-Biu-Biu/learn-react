import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [], isLoaded: false }
    }

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
