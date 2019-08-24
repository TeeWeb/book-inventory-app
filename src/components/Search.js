import React, { Component } from 'react'

import './Search.css'

export default class Search extends Component {
  handleChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.props.onUpdateSearch(value)
  }

  render () {
    const { value } = this.props

    return (
      <div className="search">
        <hr></hr>
        <label htmlFor="search-input">Search Book Title: </label>
        <input name="search-input" 
          type="text" 
          value={value} 
          onChange={this.handleChange} 
          placeholder="Search book titles">
        </input>

      </div>
    )
  }
}