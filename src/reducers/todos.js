// 对应添加todo事项处理的reducer
// 此时的state仅仅是一个数组><，用来存放待办事项
const todos = (state = [], action) => {
    switch (action.type) {
        // 添加待办
        case 'ADD_TODO':
            // state中添加一个新的待办内容（根据payload）
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ]

        // 勾选待办
        case 'TOGGLE_TODO':
            // 根据id（来自payload），把对应的状态进行更改
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        // 默认情况
        default:
            return state
    }
}

export default todos
