import React from 'react';
import {connect} from 'react-redux';
//Components
import Header from './Header';
import SearchHeader from './SearchHeader';
import { SearchForm } from './SearchForm';
import {startQuery} from '../actions/query';

class PenaltyTracker extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(query){
    this.props.onSubmit(query);
    this.props.history.push('/results')
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchHeader/>
        <SearchForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (query) => dispatch(startQuery(query))
  }
}

export default connect(undefined, mapDispatchToProps)(PenaltyTracker);
