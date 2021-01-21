import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

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
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

// 把dispatch以props传递给目标组件TodoList
// 待办列表需要的触发的dispatch是勾选事项的时候，根据id触发state的更改
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
})

// 通过connect，把需要的state和dispatch传递给TodoList组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
