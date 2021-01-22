import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

// 需要显示的待办列表
class TodoList extends Component {
    render() {
        // 把所有props中收到的todo都发送给Todo组件进行渲染
        // 并给Todo组件传递自己收到的点击处理事件
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.toggleTodo(todo.id)}
                    />
                ))}
            </ul>
        )
    }
}

// 对接收到的props进行类型检测
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoList
