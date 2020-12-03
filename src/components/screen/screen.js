import React from "react";
import { Link } from "react-router-dom";
import "./screen.css";

export default function Screen({ match, deleteMatch }) {
  return (
    <div className="container">
      <div className="card   text-center mt-3 ">
        <div className="card-body container ">
          <div className="row justify-content-center">
            {new Date(match.date).toDateString() +
              "         " +
              match.startTime}
          </div>
          <div className="row score">
            <div className="col">{match.homeTeam}</div>
            <div className="col">
              {match.homeTeamScore}-{match.awayTeamScore}
            </div>
            <div className="col">{match.awayTeam}</div>
          </div>
          <div className="row justify-content-center">{match.isActive}</div>
          <button onClick={deleteMatch} className="btn btn-primary m-2">
            Delete Match
          </button>
          <Link  className="btn btn-primary m-2" to={`/match/${match._id}`}>Edit Match</Link>
        
        </div>
      </div>
    </div>
  );
}

