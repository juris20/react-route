import React, { Component } from 'react'
import RainBow from '../components/RainBow';

class About extends Component {
    constructor(props) {
        super(props);
        // setTimeout(() => {
        //     props.history.push('/contact');
        // }, 2000);
    }
    render() {
        return (
            <div className="container">
                <h4 className="container">About</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus ratione mollitia voluptate sunt saepe tempore! Asperiores atque quibusdam itaque magnam, enim explicabo expedita eaque beatae modi quod odio molestiae!</p>
            </div>
        )
    }
}

export default  RainBow(About);
