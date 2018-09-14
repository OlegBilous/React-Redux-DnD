import { createReducer } from 'reduxsauce'
import { Types } from '../actions/global'

export const initialState = {
  status: {},
}

const updateStates = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

const handlers = {
  [Types.UPDATE_STATES]: updateStates,
}

export default createReducer(initialState, handlers)
