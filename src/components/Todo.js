import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

// 对props的检测
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo
