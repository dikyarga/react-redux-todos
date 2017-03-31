import * as ActionTypes from '../constants'

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return action.payload
    default:
      return state
  }
}

export default todoReducer
