import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    render() {
        // 利用ref，用来存放输入框的dom节点
        let input
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        // 点击发送按钮的时候，阻止默认事件(刷新页面)
                        // 并修剪字符，如果修剪后没有有效字符，则直接返回，没有什么需要处理的
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        // 注意这里的dispatch是通过export中的connect进行注入的
                        // 如果提交的todo内容有效，则派送添加todo事件的action
                        // 并清空输入（这里是直接使用的ref来控制dom节点）
                        this.props.dispatch(addTodo(input.value))
                        input.value = ''
                    }}
                >
                    <input ref={(node) => (input = node)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)
