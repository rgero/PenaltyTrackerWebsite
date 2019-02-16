import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

//Components
import Header from './Header';

export class ResultsPage extends Component {

  constructor(props){
      super(props);
      if (!props.query){
        this.props.history.push('/')
      }
      this.generateURL = this.generateURL.bind(this);
  }

  generateURL(params){
    var url = "http://localhost:8888/api?"
    if(!params) { return; }
    console.log(params);
    // Parse Season
    if (params["season"]) { url = url + "season=" + params["season"]}

    // Parse Players
    if (params["players"])
    {
      url = url + "&players=" + params["players"]
    }

    // Parse Penalty
    if (params["penalty"])
    {
      url = url + "&penalty=" + params["penalty"]
    }

    if (params["opponents"])
    {
      url = url + "&opponents=" + params["opponents"].join()
    }
    if (params["teams"])
    {
      url = url + "&teams=" + params["teams"].join()
    }




    return url;
  }

  render() {
    var url = this.generateURL(this.props.query);
    console.log(url);
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
        ...state.query,
        results: null
    };
}

export default connect(mapStateToProps)(ResultsPage);
