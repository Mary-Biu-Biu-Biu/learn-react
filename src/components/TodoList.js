import React, { Component } from 'react'
import Todo from './Todo'

// 需要显示的待办列表
class componentName extends Component {
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

export default componentName
