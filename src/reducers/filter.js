// 此时的state是一个常数，默认是全部显示
const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        // action类型是更换，则根据payload更换当前的state
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filter
