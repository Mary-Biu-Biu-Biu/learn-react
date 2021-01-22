import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'

// Footer中每个filter按钮
class FilterButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.active}
                className="btn btn-default"
                style={{
                    marginLeft: '4px',
                }}
            >
                {
                    // children代表父层组件使用该组件时，所有的子节点
                    // 在这里：Footer使用的时候，添加了文字节点
                    this.props.children
                }
            </button>
        )
    }
}

FilterButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

// 监听Redux store的变化，只要store变化，该函数就会被调用
// 该函数返回一个纯对象，会和组件的props合并
const mapStateToProps = (state, ownProps) => ({
    // ownProps：指的是父层组件传来的props，这里是Footer传来的
    // state：指的是redux中存放的state
    // 判断当前filter是否正在被采用
    active: ownProps.filter === state.filter,
})

// 该函数接收dispatch函数，即如何根据当前的props发送action
//（然后reducer会根据action修改state）
// 只要组件接收到新的props，该函数就会被调用
const mapDispatchToProps = (dispatch, ownProps) => ({
    // 只要props中的filter发生变化，就会派发修改filter的action
    // reducer那边的filter reducer会根据新的filter更改
    // 点击：更换filter
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
