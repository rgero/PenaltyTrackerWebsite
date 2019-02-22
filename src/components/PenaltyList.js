import React from 'react';
import { connect } from 'react-redux';
import PenaltyListItem from './PenaltyListItem'

export const PenaltyList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-desktop">Player</div>
                <div className="show-for-desktop">Team</div>
                <div className="show-for-desktop">Opponent</div>
                <div className="show-for-desktop">Penalty</div>
                <div className="show-for-desktop">Date</div>
                <div className="show-for-desktop">Home/Away</div>
                <div className="show-for-desktop">Referees</div>
            </div>
            <div className="list-body">
                {
                    props.penalties.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Penalties</span>
                        </div>
                    ) : (
                        props.penalties.map((penalty, index) => (
                            <PenaltyListItem
                                playerName = {penalty.playerName}
                                teamName = {penalty.teamName}
                                opponentTeam = {penalty.opponentTeam}
                                penalty = {penalty.penalty}
                                gameDate = {penalty.gameDate}
                                homeAway = {penalty.homeAway}
                                refs = {penalty.refs}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, props)=>{
    return {
        penalties: state
    };
}

export default connect(mapStateToProps)(PenaltyList);