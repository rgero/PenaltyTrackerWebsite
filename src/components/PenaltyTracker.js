import React, { Component } from 'react';

//Components
import Header from './Header';
import SearchHeader from './SearchHeader';
import { SearchForm } from './SearchForm';

class PenaltyTracker extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchHeader/>
        <SearchForm/>
      </div>
    );
  }
}

export default PenaltyTracker;
