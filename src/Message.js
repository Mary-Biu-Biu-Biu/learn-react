import React, { Component } from 'react'
import axios from 'axios'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = { isloaded: false }
    }
    componentDidMount() {
        axios
            // .get('http://mock-api.com/onwW4ynN.mock/messages')
            .get('http://mock-api.com/onwW4ynN.mock/error')
            .then((response) => {
                console.log(response)
                if (
                    response.status === 200 &&
                    response.request.readyState === 4
                ) {
                    this.setState({ message: response.data, isloaded: true })
                } else if (response.request.readyState === 4) {
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({ isloaded: false, error: error })
            })
    }
    render() {
        return this.state.isloaded ? (
            // 已正确加载：把每个进行渲染
            this.state.message.map((message, i) => {
                return (
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h5 className="panel-title">
                                用户名：{message.uid} || 时间：{message.time}
                            </h5>
                        </div>

                        <div className="panel-body">
                            消息：{message.message}
                        </div>
                    </div>
                )
            })
        ) : this.state.error ? (
            // 加载出现错误：返回错误信息
            <div class="alert alert-danger" role="alert">
                错误：{JSON.stringify(this.state.error.message)}
            </div>
        ) : (
            // 还没加载出来：返回加载中的信息
            <div class="alert alert-warning" role="alert">
                加载中...
            </div>
        )
    }
}

export default Message
