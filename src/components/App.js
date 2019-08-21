import React from 'react';
import './App.css';

import BookshelfContainer from '../containers/BookshelfContainer'
import NewBookTitleContainer from '../containers/NewBookTitleContainer';
import NewBookAuthorContainer from '../containers/NewBookAuthorContainer';
import NewBookIsbnContainer from '../containers/NewBookIsbnContainer';
import NewBookQtyContainer from '../containers/NewBookQtyContainer';
import AddBookBtnContainer from '../containers/AddBookBtnContainer'


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Add a Book</h2>
        <NewBookTitleContainer />
        <NewBookAuthorContainer />
        <NewBookIsbnContainer />
        <NewBookQtyContainer />
        <AddBookBtnContainer />
        {/* <BookshelfContainer /> */}
        {/*<Toolbar /> */}
      </div>
    );
  }
}

