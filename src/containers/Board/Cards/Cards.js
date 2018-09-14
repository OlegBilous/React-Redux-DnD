import React, { Component} from 'react'

class Cards extends Component {
    render() {
        return this.props.cards.map((item, i) => 
            <div className="card">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
            </div>
        )
    }
}
export default Cards