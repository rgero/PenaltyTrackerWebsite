import React from 'react';
import { connect } from 'react-redux';

import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export const PenaltyList = (props) => {
    var data = props.penalties;
    return (
        <div className="content-container">
            <ReactTable
                data={data}
                columns={[
                    {
                    Header: "Penalty",
                    columns: [
                        {
                        Header: "Name",
                        accessor: "playerName"
                        },
                        {
                            Header: "Team Name",
                            accessor: "teamName"
                        },
                        {
                            Header: "Opponent",
                            accessor: "opponentTeam"
                        },
                        {
                            Header: "Game Date",
                            accessor: "gameDate"
                        },
                        {
                            Header: "Penalty",
                            accessor: "penalty"
                        },
                        {
                            Header: "Location",
                            accessor: "homeAway",
                            Cell: props => <div> { props.value === 1 ? "Home" : "Away" } </div>
                        }
                    ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
                />
        </div>
    )
};

const mapStateToProps = (state, props)=>{
    return {
        penalties: state
    };
}

export default connect(mapStateToProps)(PenaltyList);