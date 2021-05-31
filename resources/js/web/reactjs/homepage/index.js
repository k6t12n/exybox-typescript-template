import React from 'react'
import {render} from 'react-dom'

const Homepage = () => {

    return (
        <div>
            <h4>
                Exybox Framework
            </h4>
            <p>Hello, world. This is exybox.</p>
        </div>
    )

}

render(<Homepage/>, document.getElementById('homepage-component'))
