import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Message from './Message'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [], isLoaded: false }
    }

    render() {
        return (
            <div className="container">
                <Message></Message>
            </div>
        )
    }
}

export default App
