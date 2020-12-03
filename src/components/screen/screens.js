import React from "react";
import Screen from "./screen";
import { Link } from "react-router-dom";


export default function Screens({matches, deleteMatch}) {
  return (
    <div>
      <Link to="match/new" className="btn btn-primary m-2" >
        Add a New Match
      </Link>
      {matches.map((match) => (
        <Screen key={match._id} match={match}  deleteMatch={()=>deleteMatch(match._id)} />
      ))}
    </div>
  );
}
