import React, {Component} from 'react'
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props);

        this.buttonClick = this.buttonClick.bind(this);

        this.state = {
            count: 0,
            isOn: true
        }
    }

    componentDidMount() {
        console.log('render');
    }

    buttonClick() {
        this.setState(function (prevState) {
            return {count: prevState.count + 1, isOn: !prevState.isOn}
        })
    }

    render = () => (
        <button onClick={this.buttonClick} className='Button'>
            I'm Clicked - {this.state.count} times and is {this.state.isOn ? 'ON' : 'OFF'}
        </button>
    )
}

export default Button