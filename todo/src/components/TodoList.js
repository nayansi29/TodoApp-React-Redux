import React, { Component } from 'react'
import Modal from './Modal';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="ui borderless blue inverted pointing menu">
          <div className="ui container">
            <h1 className='ui text white'>Todo List App</h1>

          </div>
        </div>
        <Modal />
      </div>


    )
  }
}
