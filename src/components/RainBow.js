import React, { Component } from 'react'


const RainBow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'purple', 'black', 'brown', 'yellow'];
    

    let className = 'red-text';

    setInterval(() => {
        let index = Math.floor(Math.random() * colors.length )
        let randomColors = colors[index];

        className = randomColors + '-text';
    }, 1000)

     console.log(className);
    


    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}


export default  RainBow 