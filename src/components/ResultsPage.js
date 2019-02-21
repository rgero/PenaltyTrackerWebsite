import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

//Components
import Header from './Header';

export class ResultsPage extends Component {

  constructor(props){
      super(props);
      
  }

  render() {
    return (
      <div>
        <Header/>
        { this.props.penalties ?  (
          <div>
            There are {this.props.penalties.length} penalties
          </div>
        ):(
          <div>
            There are no penalties currently being reported.
          </div>
        
        
        )}
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
