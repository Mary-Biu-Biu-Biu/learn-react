import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link'

// 监听Redux store的变化，只要store变化，该函数就会被调用
// 该函数返回一个纯对象，会和组件的props合并
const mapStateToProps = (state, ownProps) => ({
    // 给Link组件传递当前有效的filter
    // ownProps指的是组件的props，state指的是redux中存放的state
    active: ownProps.filter === state.filter,
})

// 该函数接收dispatch函数，即如何根据当前的props发送action
//（然后reducer会根据action修改state）
// 只要组件接收到新的props，该函数就会被调用
const mapDispatchToProps = (dispatch, ownProps) => ({
    // 只要props中的filter发生变化，就会派发修改filter的action
    // reducer那边的filter reducer会根据新的filter更改
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

// 返回一个新的组件class
export default connect(mapStateToProps, mapDispatchToProps)(Link)
