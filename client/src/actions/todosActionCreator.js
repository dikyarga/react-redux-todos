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

export const addTodo = results => ({
  type: ActionTypes.ADD_TODO,
  payload: results
})

export const addTodoApi = (todo) => {
  console.log('isi tood : ', todo);
  return (dispatch) => {
    axios.post(hostEndPoint, {
      title: todo,
      completed: false,
      createdAt: new Date()
    }).then((response) => {
      console.log(response);
      dispatch(addTodo(response.data))
    }).catch((err) => {
      console.log('error when trying to add todo : ', err);
    })
  }
}
