import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/global'
import Cards from './Cards/Cards'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class Board extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div className="container">
        {this.props.lists.map((item, i) =>
          <div className="column" key={item.id}>
            <Cards cards={item.cards} column={i} moveCard={this.props.moveCard} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.global.lists
  }
}

const mapDispatchToProps = {
  getList: Creators.getList,
  moveCard: Creators.moveCard
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DragDropContext(HTML5Backend)(Board)
)
