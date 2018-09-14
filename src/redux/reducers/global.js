import { createReducer } from 'reduxsauce'
import { Types } from '../actions/global'

export const initialState = {
  lists: []
}

const getList = (state, action) => {
  return {
    ...state,
    lists: [{
        "cards": [
            {"id": 0, "title": "Title 1", "description": "Description"},
            {"id": 1, "title": "Title 2", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 2, "title": "Title 3", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 3, "title": "Title 4", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 4, "title": "Title 5", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 5, "title": "Title 6", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 6, "title": "Title 7", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
        ],
        "id": 0,
        "name": "Fantastic Concrete Towels"
    },
    {
        "cards": [
            {"id": 10, "title": "Title 1", "description": "Description 1"},
            {"id": 11, "title": "Title 2", "description": "Description 2"},
            {"id": 12, "title": "Title 3", "description": "Description 3"},
            {"id": 13, "title": "Title 4", "description": "Description 4"},
            {"id": 14, "title": "Title 5", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 15, "title": "Title 6", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
            {"id": 16, "title": "Title 7", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, blanditiis."},
      ],
        "id": 1,
        "name": "Intelligent Frozen Ball"
    }]
  }
}

const moveCard = (state, action) => {
  const lists = state.lists;
  const {column, item, newColumn, newItem} = action;
  const tmp = lists[column].cards[item];
  if(column === newColumn) {
    lists[column].cards[item] = lists[column].cards[newItem]
    lists[column].cards[newItem] = tmp;
  } else {
    lists[column].cards.splice(item, 1)
    lists[newColumn].cards.splice(newItem, 0, tmp)
  }
  return {
    ...state,
    lists
  }
}

const handlers = {
  [Types.GET_LIST]: getList,
  [Types.MOVE_CARD]: moveCard,
}

export default createReducer(initialState, handlers)
