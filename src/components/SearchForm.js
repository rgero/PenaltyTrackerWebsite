import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class SearchForm extends React.Component {

    constructor(props){
        super(props);

        //Functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onTeamChange = this.onTeamChange.bind(this);

        this.state = {
            players: "",
            teams: [],
            opponents: [],
            location: "",
            penalty: "",
            startDate: undefined,
            endDate: undefined,
            season: ""
        };
    };
    
    onSubmit(e){
        e.preventDefault();
    }

    onTeamChange = (key) => (e) => {
        var options = e.target.options;
        var values = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            values.push(options[i].value);
            }
        }
        if (key === "player"){
            this.setState({
                teams: values
            })
        } else if (key === "opponent"){
            this.setState({
                opponents: values
            })
        }
    }

    render() {

        let teamList =  [   { id: "ANA", name: "Anaheim Ducks"},
                            { id: "ARI", name: "Arizona Coyotes"},
                            { id: "BOS", name: "Boston Bruins"},
                            { id: "BUF", name: "Buffalo Sabres"},
                            { id: "CGY", name: "Calgary Flames"},
                            { id: "CAR", name: "Carolina Hurricanes"},
                            { id: "CHI", name: "Chicago Blackhawks"},
                            { id: "COL", name: "Colorado Avalanche"},
                            { id: "CBJ", name: "Columbus Blue Jackets"},
                            { id: "DAL", name: "Dallas Stars"},
                            { id: "DET", name: "Detroit Red Wings"},
                            { id: "EDM", name: "Edmonton Oilers"},
                            { id: "FLA", name: "Florida Panthers"},
                            { id: "LAK", name: "Los Angeles Kings"},
                            { id: "MIN", name: "Minnesota Wild"},
                            { id: "MTL", name: "Montreal Canadiens"},
                            { id: "NSH", name: "Nashville Predators"},
                            { id: "NJD", name: "New Jersey Devils"},
                            { id: "NYI", name: "New York Islanders"},
                            { id: "NYR", name: "New York Rangers"},
                            { id: "OTT", name: "Ottawa Senators"},
                            { id: "PHI", name: "Philadelphia Flyers"},
                            { id: "PIT", name: "Pittsburgh Penguins"},
                            { id: "SJS", name: "San Jose Sharks"},
                            { id: "STL", name: "St Louis Blues"},
                            { id: "TBL", name: "Tampa Bay Lightning"},
                            { id: "TOR", name: "Toronto Maple Leafs"},
                            { id: "VAN", name: "Vancouver Canucks"},
                            { id: "VGK", name: "Vegas Golden Knights"},
                            { id: "WSH", name: "Washington Capitals"},
                            { id: "WPG", name: "Winnipeg Jets"}
                        ]
        
        let teamOptions = teamList.map((team)=> {
            return <option key={team.id} value={team.id}>{team.name}</option>
        })

        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form__input">
                        <label>Player's Team</label>
                        <select multiple className="select" onChange={this.onTeamChange("player")} value={this.state.teams}>
                            {teamOptions}
                        </select>
                    </div>
                    <div className="form__input">
                        <label>Opponent Team</label>
                        <select multiple className="select" onChange={this.onTeamChange("opponent")} value={this.state.opponents}>
                            {teamOptions}
                        </select>
                    </div>
                </form>
            </div>
        )
    }

}


export default SearchForm;