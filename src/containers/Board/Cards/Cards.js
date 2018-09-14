import React, { Component} from 'react'
import Card from './Card'

class Cards extends Component {
    render() {
        return this.props.cards.map((item, i) => 
            <Card item={item} key={item.id} />
        )
    }
}
export default Cards