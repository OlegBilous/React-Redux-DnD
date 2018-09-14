import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/global'
import Cards from './Cards/Cards'

class Board extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div className="container">
        {this.props.lists.map((item, i) =>
          <div class="column" key={item.id}>
            <Cards cards={item.cards} />
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
  getList: Creators.getList
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
