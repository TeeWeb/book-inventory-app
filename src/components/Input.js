import React from 'react'

export default class NewBook extends React.Component {
  handleChange = event => {
    const value = event.target.value;
    switch (event.target.placeholder) {
      case 'Title':
        this.props.updateNewBookTitle(value)
        break
      case 'Author':
        this.props.updateNewBookAuthor(value)
        break
      case 'ISBN':
        this.props.updateNewBookIsbn(value)
        break
      case 'Quantity':
        this.props.updateNewBookQty(value)
        break
      default:
        return;
    }
  }

  render() {
    const { value, placeholder } = this.props

    return (
      <form className="new-book" onSubmit={this.handleSubmit}>
        <input className="new-book-input" 
          type="text" 
          value={value} 
          placeholder={placeholder}
          onChange={this.handleChange} />
      </form>
    )
  }
}