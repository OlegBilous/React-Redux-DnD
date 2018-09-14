import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd'
import { DropTarget } from 'react-dnd'
import flow from 'lodash/flow';
import PropTypes from 'prop-types'

import { Types } from '../../../configs'

const cardSource = {
    beginDrag(props, monitor, component) {
      const { items, column, item } = props
      return { column, item }
    }
};

const cardTarget = {
    drop(props, monitor, component) {
        // TODO save item to board after end druging
    
        const column = monitor.getItem().column;
        const item = monitor.getItem().item;
    
        const newColumn = props.column;
        const newItem = props.item;

        console.log(props)
    
        props.moveCard(column, item, newColumn, newItem);
      },
    hover(props, monitor, component) {
        const draggedId = monitor.getItem().id;
    
        const dragIndexX = monitor.getItem().x;
        const dragIndexY = monitor.getItem().y;
    
        const hoverIndexX = props.x;
        const hoverIndexY = props.y;
    
        if (dragIndexX === hoverIndexX && dragIndexY === hoverIndexY) {
          return;
        }
    }
}
  
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const propTypes = {
    items: PropTypes.object,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
};

function getStyles(isDragging) {
    return {
        opacity: isDragging? 0: 1
    }
}

class Card extends Component {
    render() {
        const { isDragging, connectDragSource, connectDropTarget } = this.props;
        return connectDragSource(connectDropTarget(
            <div style={getStyles(isDragging)} className="card">
                <div className="title">{this.props.items.title}</div>
                <div className="description">{this.props.items.description}</div>
            </div>
        ));
    }
}

Card.propTypes = propTypes;

export default flow(
    DropTarget(Types.CARD, cardTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    })),
    DragSource(Types.CARD, cardSource, collect)
)(Card)