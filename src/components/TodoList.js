import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

import { toggleTodo } from '../actions'
import { connect } from 'react-redux'

// class组件：需要显示的待办列表 =》 存放渲染模板
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
                        onClick={() => {
                            // 点击某个事项，就根据当前的id，dispatch action
                            // 这里的toggleTodo是react-redux传进来的
                            this.props.toggleTodo(todo.id)
                        }}
                    />
                ))}
            </ul>
        )
    }
}

// 对接收到的props进行类型检测
TodoList.propTypes = {
    // todos：所有可见的待办事项
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,

    // toggleTodo：勾选todo时进行的事件处理
    toggleTodo: PropTypes.func.isRequired,
}

// 一个function：根据当前的filter，给出符合条件的待办数组
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter((t) => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

// 把state以props传递给目标组件TodoList
// 它需要的state是：符合当前显示条件的待办数组（根据getVisibleTodos这个函数的结果）
const mapStateToProps = (state) => ({
    // 把redux全局state中存放的todos，经过当前filter进行过滤
    todos: getVisibleTodos(state.todos, state.filter),
})

// 把dispatch以props传递给目标组件TodoList
// 待办列表需要的触发的dispatch是勾选事项的时候，根据id触发state的更改
const mapDispatchToProps = (dispatch) => ({
    // dispatch时redux的函数：dispatch中的toggleTodo函数是在action文件中定义好的action
    // 现在把这个派送toggleTodo的函数作为props传递给组件
    toggleTodo: (id) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
