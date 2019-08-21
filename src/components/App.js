import React from 'react';
import './App.css';

import BookshelfContainer from '../containers/BookshelfContainer'
import NewBookContainer from '../containers/NewBookContainer'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Add a Book</h2>
        <NewBookContainer />
        <BookshelfContainer />
        {/*<Toolbar /> */}
      </div>
    );
  }
}

