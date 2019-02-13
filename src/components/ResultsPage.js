import React, { Component } from 'react';
import {connect} from 'react-redux';

//Components
import Header from './Header';

export class ResultsPage extends Component {

  constructor(props){
      super(props);
      if (!props.query){
        this.props.history.push('/')
      }
  }

  render() {
    return (
      <div>
        <Header/>
        RESULTS!
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        query: state.query,
        results: null
    };
}

export default connect(mapStateToProps)(ResultsPage);
