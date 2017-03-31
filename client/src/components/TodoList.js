import React from 'react'
import { connect } from 'react-redux'

import { getTodos, fetchTodos } from '../actions'

class TodoList extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.props.fetchTodos()
    setTimeout(function(){ console.log("keliuar", this.props.todos); }, 3000);
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => {
            return (
              <li key={index}>{ item.title } </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('jalan cuk', state);
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (TodoList)