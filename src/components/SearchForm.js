import React from 'react';
import { SingleDatePicker } from 'react-dates';

export class SearchForm extends React.Component {

    constructor(props){
        super(props);

        //Functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onTeamChange = this.onTeamChange.bind(this);
        this.onSeasonChange = this.onSeasonChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.resetState = this.resetState.bind(this);

        this.state = {
            players: "",
            teams: [],
            opponents: [],
            location: "either",
            penalty: "",
            startDate: undefined,
            endDate: undefined,
            season: "Regular_18_19",
            startCalendarFocused: false,
            endCalendarFocused: false
        };
    };
    
    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit({
            players: this.state.players,
            teams: this.state.teams,
            opponents: this.state.opponents,
            location: this.state.location,
            penalty: this.state.penalties,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            season: this.state.season
        })
    }

    resetState(){
        this.setState({
            players: "",
            teams: [],
            opponents: [],
            location: "either",
            penalty: "",
            startDate: undefined,
            endDate: undefined,
            season: "Regular_18_19",
            startCalendarFocused: false,
            endCalendarFocused: false
        })
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

    

    onSeasonChange = (e) => {
        var season = e.target.value;
        this.setState({
            season
        })
    }

    onTextChange = (key) => (e) => {
        var newValue = e.target.value;
        switch(key){
            case "name":
                this.setState({
                    players: newValue
                });
                break;
            case "penalty":
                this.setState({
                    penalty: newValue
                })
                break;
            default:
                break;
        }
    }

    onDateChange = (key) => (e) => {
        switch(key){
            case "start":
                this.setState({
                    startDate: e
                })
                break;
            case "end":
                this.setState({
                    endDate: e
                })
                break;
            default:
                break;
        }
    }

    onCalendarFocusChanged = (key) => (calendarFocused) => {
        calendarFocused = calendarFocused["focused"]
        switch(key){
            case "start":
                this.setState(() => ({startCalendarFocused: calendarFocused}));
                break;
            case "end":
                this.setState(() => ({endCalendarFocused: calendarFocused}));
                break;    
            default:
                break;
        }
    }


    onLocationChange = (e) => {
        var location = e.target.value;
        this.setState(
            {location}
        )

    }

    render() {

        let seasonList = [
            { id: "Regular_16_17", name: "2016-17 Regular"},
            { id: "Playoffs_16_17", name: "2016-17 Playoffs"},
            { id: "Regular_17_18", name: "2017-18 Regular"},
            { id: "Playoffs_17_18", name: "2017-18 Playoffs"},
            { id: "Regular_18_19", name: "2018-19 Regular"}
        ]

        let seasonOptions = seasonList.map((season)=> {
            return <option key={season.id} value={season.id}>{season.name}</option>
        })

        let teamList =  [   { id: "Ducks", name: "Anaheim Ducks"},
                            { id: "Coyotes", name: "Arizona Coyotes"},
                            { id: "Bruins", name: "Boston Bruins"},
                            { id: "Sabres", name: "Buffalo Sabres"},
                            { id: "Flames", name: "Calgary Flames"},
                            { id: "Hurricanes", name: "Carolina Hurricanes"},
                            { id: "Blackhawks", name: "Chicago Blackhawks"},
                            { id: "Avalanche", name: "Colorado Avalanche"},
                            { id: "Jackets", name: "Columbus Blue Jackets"},
                            { id: "Stars", name: "Dallas Stars"},
                            { id: "Wings", name: "Detroit Red Wings"},
                            { id: "Oilers", name: "Edmonton Oilers"},
                            { id: "Panthers", name: "Florida Panthers"},
                            { id: "Kings", name: "Los Angeles Kings"},
                            { id: "Wild", name: "Minnesota Wild"},
                            { id: "Canadiens", name: "Montreal Canadiens"},
                            { id: "Predators", name: "Nashville Predators"},
                            { id: "Devils", name: "New Jersey Devils"},
                            { id: "Islanders", name: "New York Islanders"},
                            { id: "Rangers", name: "New York Rangers"},
                            { id: "Senators", name: "Ottawa Senators"},
                            { id: "Flyers", name: "Philadelphia Flyers"},
                            { id: "Penguins", name: "Pittsburgh Penguins"},
                            { id: "Sharks", name: "San Jose Sharks"},
                            { id: "Blues", name: "St Louis Blues"},
                            { id: "Lightning", name: "Tampa Bay Lightning"},
                            { id: "Leafs", name: "Toronto Maple Leafs"},
                            { id: "Canucks", name: "Vancouver Canucks"},
                            { id: "Knights", name: "Vegas Golden Knights"},
                            { id: "Capitals", name: "Washington Capitals"},
                            { id: "Jets", name: "Winnipeg Jets"}
                        ]
        
        let teamOptions = teamList.map((team)=> {
            return <option key={team.id} value={team.id}>{team.name}</option>
        })

        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form__input">
                        <label>Season</label>
                        <select className="select" onChange={this.onSeasonChange} value={this.state.season}>
                            {seasonOptions}
                        </select>
                    </div>
                    <div className="form__input">
                        <label>Player Name</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Name"
                            autoFocus
                            value={this.state.players}
                            onChange={this.onTextChange("name")}
                        />
                    </div>
                    <div className="form__input">
                        <label>Penalty</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Penalty"
                            autoFocus
                            value={this.state.penalty}
                            onChange={this.onTextChange("penalty")}
                        />
                    </div>
                    <div className="form__input">
                        <label>Player's Team</label>
                        <select multiple className="selectTeams" onChange={this.onTeamChange("player")} value={this.state.teams}>
                            {teamOptions}
                        </select>
                    </div>
                    <div className="form__input">
                        <label>Opponent Team</label>
                        <select multiple className="selectTeams" onChange={this.onTeamChange("opponent")} value={this.state.opponents}>
                            {teamOptions}
                        </select>
                    </div>
                    <div className="form__input">
                        <label>Location</label>
                        <select className="select" onChange={this.onLocationChange} value={this.state.location}>
                            <option key="home" value="home">Home</option>
                            <option key="away" value="away">Away</option>
                            <option key="either" value="either">Either</option>
                        </select>
                    </div>
                    <div className="form__input">
                        <label>Start Date</label>
                        <SingleDatePicker 
                            date={this.state.startDate}
                            onDateChange={this.onDateChange("start")}
                            focused={this.state.startCalendarFocused}
                            onFocusChange={this.onCalendarFocusChanged("start")}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                            block
                        />
                    </div>
                    <div className="form__input">
                        <label>End Date</label>
                        <SingleDatePicker 
                            date={this.state.endDate}
                            onDateChange={this.onDateChange("end")}
                            focused={this.state.endCalendarFocused}
                            onFocusChange={this.onCalendarFocusChanged("end")}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                            block
                        />
                    </div>
                    <div className="buttons">
                        <button className="button" onClick={this.resetState}>Reset</button>
                        <button className="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default SearchForm;