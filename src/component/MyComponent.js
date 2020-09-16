import React, { Component } from 'react'
import Buttons from './Buttons';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: ["green","red","blue","yellow","purple","gray"]};
      }
    render() {
        return (
            <div>
                <Buttons colors={this.state.theme}></Buttons>
            </div>
        )
    }
}
