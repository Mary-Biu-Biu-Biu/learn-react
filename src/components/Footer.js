import React, { Component } from 'react'

// ？？？？？？？？？？？？？？？？？？？？？？？？？
import FilterLink from '../containers/FilterLink'

// 在action/index.js中定义的常量
import { VisibilityFilters } from '../actions/index'

class Footer extends Component {
    render() {
        return (
            <div>
                <span>Show: </span>

                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>

                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        )
    }
}

export default Footer
