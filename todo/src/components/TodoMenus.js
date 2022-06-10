import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TodoMenus extends Component {
  render() {
    return (
      <div className='ui container'>
        <div className="ui four  item inverted menu">
          <Link to="/" className="active item blue">
            All
          </Link>
          <Link to="/active" className=" active item red">
            Active
          </Link>
          <Link to="/completed" className="active item green">
            Completed
          </Link>
          <Link to="/acheive" className="item">
            Achieve
          </Link>
        </div>
      </div>
    )
  }
}
