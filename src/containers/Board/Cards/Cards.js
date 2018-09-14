import React, { Component} from 'react'
import { DropTarget } from 'react-dnd';
import Card from './Card'

import { Types } from '../../../configs'

const specs = {
    hover(props) {
      return {
        title: '123'
      };
    },
  
    drop(props) {
      return {
        title: '123'
      };
    }
};

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
    };
}

class Cards extends Component {
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="abc">
                {this.props.cards.map((item, i) => 
                    <Card items={item} moveCard={this.props.moveCard} column={this.props.column} item={i} key={item.id} />
                )}
            </div>
        )
    }
}
export default DropTarget(Types.CARD, specs, collect)(Cards)