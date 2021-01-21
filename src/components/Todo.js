import React, { Component } from 'react'

// 单个待办事项组件
class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    // 根据待办状态决定是否需要删除线
                    textDecoration: this.props.completed
                        ? 'line-through'
                        : 'none',
                }}
            >
                {this.props.text}
            </li>
        )
    }
}

export default Todo
