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

const handlers = {
  [Types.GET_LIST]: getList,
}

export default createReducer(initialState, handlers)
