import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link'

//
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
})

// 发送点击事件处理：更改需要查看的filter
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
