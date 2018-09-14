import React from 'react'

const Card = (props) => (
    <div className="card">
        <div className="title">{props.item.title}</div>
        <div className="description">{props.item.description}</div>
    </div>
)

export default Card