import React, { useState } from 'react'
import Axios from 'axios'
// import Joi from 'joi-browser'

export default function EditMatch() {
    const [match, setMatch] = useState({id})
    const url = "http://localhost:1000/api/matches"

    const handleClick = async (e)=>{
       try {
         e.preventDefault();
        console.log(match)
        await Axios.put(`${url}/${match.id}`, match)
        window.history.back()
       } catch (error) {
         alert('there is something wrong make sure you filled all inputs properly', error)
       } 
    }

    return (
        <div>
            <form>
            
  <div className="form-group">
    <label htmlFor="homeTeam">Home Team</label>
    <input onChange={e=>setMatch({...match, homeTeam:e.target.value})} className="form-control" id="homeTeam"  />
  </div>
  <div className="form-group">
    <label htmlFor="awayTeam">Away Team</label>
    <input  onChange={e=>setMatch({...match, awayTeam:e.target.value})}  className="form-control" id="awayTeam"  />
  </div>
  <div className="form-group">
    <label htmlFor="date">Date</label>
    <input  onChange={e=>setMatch({...match, date:e.target.value})} type="date" className="form-control" id="date"  />
  </div>
  <div className="form-group">
    <label htmlFor="startTime">Start Time</label>
    <input   onChange={e=>setMatch({...match, startTime:e.target.value})} type="time" className="form-control" id="startTime"  />
  </div>
  <div className="form-group">
    <label htmlFor="endTime">End Time</label>
    <input  onChange={e=>setMatch({...match, endTime:e.target.value})}  type="time" className="form-control" id="endTime"  />
  </div>
  <div className="form-group">
    <label htmlFor="duration">Duration</label>
    <input  onChange={e=>setMatch({...match, duration:e.target.value})}  className="form-control" id="duration"  />
  </div>
  <div className="form-group row">
      <div className="col">
    <label htmlFor="homeTeamScore">Home Team Score</label>
    <input   onChange={e=>setMatch({...match, homeTeamScore:e.target.value})} className="form-control" id="homeTeamScore"  />
    </div>
    <div className="col">
    <label htmlFor="awayTeamScore">Away Team Score</label>
    <input   onChange={e=>setMatch({...match, awayTeamScore:e.target.value})} className="form-control" id="awayTeamScore"  />
    </div>
    
  </div>
  <div className="form-group">
    <label htmlFor="league">League</label>
    <input   onChange={e=>setMatch({...match, league:e.target.value})} className="form-control" id="league"  />
  </div>
  <button onClick={e => handleClick(e)} type="submit" className="btn btn-primary">Add</button>

</form>
         
        </div>
    )
}
