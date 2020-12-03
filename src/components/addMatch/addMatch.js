import React, { useEffect, useState } from "react";
import Axios from "axios";
import _ from "lodash"
// import Joi from 'joi-browser'

export default function AddMatch(props) {
  const [match, setMatch] = useState({});
  const url = "https://game-task-server.herokuapp.com/api/matches";
  const matchID = props.match.params.id;

  useEffect(() => {
    populateMatch();
  }, []);

  const populateMatch = async () => {
    try {
      if (matchID === "new") return;
      const { data: match } = await Axios.get(`${url}/${matchID}`);
      delete match._id;
      delete match.__v;
      setMatch(match);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  };

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      if (matchID === "new") {
        await Axios.post(url, match);
      } else {
        console.log(match)
        await Axios.put(`${url}/${matchID}`, match);
      }
      window.history.back();
    } catch (error) {
      alert(
        "there is something wrong make sure you filled all inputs properly",
        error
      );
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="homeTeam">Home Team</label>
          <input
            value={match.homeTeam}
            onChange={(e) => setMatch({ ...match, homeTeam: e.target.value })}
            className="form-control"
            id="homeTeam"
          />
        </div>
        <div className="form-group">
          <label htmlFor="awayTeam">Away Team</label>
          <input
            value={match.awayTeam}
            onChange={(e) => setMatch({ ...match, awayTeam: e.target.value })}
            className="form-control"
            id="awayTeam"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            value={match.date}
            onChange={(e) => setMatch({ ...match, date: e.target.value })}
            type="date"
            className="form-control"
            id="date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input
            value={match.startTime}
            onChange={(e) => setMatch({ ...match, startTime: e.target.value })}
            type="time"
            className="form-control"
            id="startTime"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input
            value={match.endTime}
            onChange={(e) => setMatch({ ...match, endTime: e.target.value })}
            type="time"
            className="form-control"
            id="endTime"
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            value={match.duration}
            onChange={(e) => setMatch({ ...match, duration: e.target.value })}
            className="form-control"
            id="duration"
          />
        </div>
        <div className="form-group row">
          <div className="col">
            <label htmlFor="homeTeamScore">Home Team Score</label>
            <input
              value={match.homeTeamScore}
              onChange={(e) =>
                setMatch({ ...match, homeTeamScore: e.target.value })
              }
              className="form-control"
              id="homeTeamScore"
            />
          </div>
          <div className="col">
            <label htmlFor="awayTeamScore">Away Team Score</label>
            <input
              value={match.awayTeamScore}
              onChange={(e) =>
                setMatch({ ...match, awayTeamScore: e.target.value })
              }
              className="form-control"
              id="awayTeamScore"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="league">League</label>
          <input
            value={match.league}
            onChange={(e) => setMatch({ ...match, league: e.target.value })}
            className="form-control"
            id="league"
          />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          {matchID === "new" ? "Add" : "update"}
        </button>
      </form>
    </div>
  );
}
