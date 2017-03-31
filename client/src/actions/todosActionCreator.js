import axios from 'axios'

import * as ActionTypes from '../constants'

const hostEndPoint = 'https://73816848.ngrok.io/todos'

export const getTodos = results => ({
  type: ActionTypes.GET_TODOS,
  payload: results
})

export const fetchTodos = () => {
  return (dispatch) => {
    axios.get(hostEndPoint).then((response) => {
      console.log('isi response dari API : ', response.data);
      dispatch(getTodos(response.data))
    })
  }
}
