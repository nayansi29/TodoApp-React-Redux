import React, { Component } from 'react'

export default class TodoCard extends Component {
  render() {
    return (
      <div className='ui container center aligned'><br />
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">Elliot Fu</div>
              <div class="description">
                Elliot Fu is a film-maker from New York.
              </div>
            </div>
            <div class="ui bottom attached button">
              <i class="add icon"></i>
              Add Friend
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">Veronika Ossi</div>
              <div class="description">
                Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
              </div>
            </div>
            <div class="ui bottom attached button">
              <i class="add icon"></i>
              Add Friend
            </div>
          </div>
        </div>
      </div>
    )
  }
}
