import React, { Component } from 'react'

export default class Sort extends Component {
  render() {
    const { books, onAlphaSort } = this.props

    return (
      <div className="sort">
        <input className="alpha-sort-btn button" type="button" onClick={() => onAlphaSort(books)} value="Sort A-Z" ></input>
      </div>
    )
  }
}