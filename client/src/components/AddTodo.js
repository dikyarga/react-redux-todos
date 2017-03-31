import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodoApi } from '../actions'

class AddTodo extends React.Component {
  constructor(){
    super()
    this.state = {
      newTodo : ''
    }
  }

  handleChange(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.addTodoApi(this.state.newTodo)

    this.setState({
      newTodo: ''
    })
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodoApi : addTodoApi }, dispatch)
}


export default connect(null, mapDispatchToProps) (AddTodo)
