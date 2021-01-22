import React, { Component } from 'react'

// ？？？？？？？？？？？？？？？？？？？？？？？？？
import FilterButton from '../components/Link'

// 在action/index.js中定义的常量
import { VisibilityFilters } from '../actions/index'

class Footer extends Component {
    render() {
        return (
            <div>
                <span>Show: </span>

                <FilterButton filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterButton>

                <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterButton>

                <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterButton>
            </div>
        )
    }
}

export default Footer
