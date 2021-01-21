let nextTodoId = 0

// 添加待办
export const addTodo = (text) => ({
    type: 'ADD_TODO', // 类型
    id: nextTodoId++, // payload
    text,
})

// 更改查看类型
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER', // 类型
    filter, // payload
})

// 勾选待办项目
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO', // 类型
    id, // payload
})

// 定义所有的查看类型的常数：显示全部/显示已完成/显示未完成
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}
