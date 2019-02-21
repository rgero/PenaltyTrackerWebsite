import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

//Components
import Header from './Header';

export class ResultsPage extends Component {

  constructor(props){
      super(props);
      console.log(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header/>
        { this.props.penalties ?  this.props.penalties : null }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        penalties: state.penalties,
    };
}

export default connect(mapStateToProps)(ResultsPage);
