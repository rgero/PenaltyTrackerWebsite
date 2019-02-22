import React from 'react';

export const PenaltyListItem = (props) => (
    <div className="list-item">
        <div className="show-for-desktop">{props.playerName}</div>
        <div className="show-for-desktop">{props.teamName}</div>
        <div className="show-for-desktop">{props.opponentTeam}</div>
        <div className="show-for-desktop">{props.penalty}</div>
        <div className="show-for-desktop">{props.gameDate}</div>
        <div className="show-for-desktop">{props.homeAway === 1 ? ( "Home" ) : ("Away") }</div>
        <div className="show-for-desktop">{props.refs}</div>
    </div> 
)

export default PenaltyListItem;