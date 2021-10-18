import React from 'react'

class MyCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='my-card'>
                <h3>{this.props.heading}</h3>
                <hr/>
                <img className='my-img' src={this.props.imageURL} />
                <hr/>
                <p>{this.props.description}</p>
                <button>Click this button</button>
                <br/>
            </div>
        )
    }
}

export default MyCard