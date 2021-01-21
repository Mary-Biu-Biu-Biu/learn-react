import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [], isLoaded: false }
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App
