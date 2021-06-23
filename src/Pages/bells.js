import React from "react"

import Button from 'react-bootstrap/Button';
import "../CSS/content.css"
import axios from "axios";
// import postRequest from "../other/requests";

function leagueWinButton()
{
    axios({
      method:'post',
      url: "http://localhost:8080/test",
      data: { 
        first: "testing"
       }
    });
}


export default function Bells() {
    return (
      <div className="content">
        <h1>This is the Bells page!</h1>
        <form onSubmit={() => leagueWinButton}>
          {/* <Button variant="dark" onClick={() => leagueWinButton} >League Gam Win</Button> */}
          <select>
            <option>Pick a degen...</option>
            <option>GUI Snas, Irelia's Bone Plating</option>
            <option>Patrick Prime the 9th</option>
          </select>
          <Button variant="dark" type="submit">League Gam Win</Button>
        </form>
        <Button variant="dark" onClick={leagueWinButton}>Ping server</Button>
      </div>
    )
}