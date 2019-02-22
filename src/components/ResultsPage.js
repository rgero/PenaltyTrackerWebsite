import React, { Component } from 'react';

//Components
import Header from './Header';
import PenaltyList from './PenaltyList';

export class ResultsPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PenaltyList/>
      </div>
    );
  }
}

export default ResultsPage;
