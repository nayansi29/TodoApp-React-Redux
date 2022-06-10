import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="ui borderless blue inverted pointing menu">
          <div className="ui container">
            <h1 className='ui text white'>Todo List App</h1>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;