import { combineReducers } from 'redux'

// 导入两个分离的reducer
import todos from './todos'
import filter from './filter'

// 合并为一个reducer
export default combineReducers({
    todos,
    filter,
})
