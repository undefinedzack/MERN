import React, { Component} from 'react'
import {PureComp} from './PureComp'

export default class ParentComponent extends Component {
    render() {
        return (
            <div>
                Parent Component
                <PureComp />
            </div>
        )
    }
}
