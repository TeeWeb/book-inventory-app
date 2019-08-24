import React from 'react';
import './App.css';

import BookshelfContainer from '../containers/BookshelfContainer'
import NewBookContainer from '../containers/NewBookContainer'
import CheckedOutContainer from '../containers/CheckedOutContainer'
import SearchContainer from '../containers/SearchContainer'
import SortContainer from '../containers/SortContainer'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Add a Book</h2>
        <NewBookContainer />
        <SearchContainer />
        <SortContainer />
        <div className="inventory">
          <BookshelfContainer title="Bookshelf" />
          <CheckedOutContainer title="Checked Out" />
        </div>
      </div>
    );
  }
}

