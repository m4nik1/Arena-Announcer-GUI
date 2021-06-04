import React from "react"

import Button from 'react-bootstrap/Button';
import "../CSS/content.css"

function leagueWinButton()
{
  console.log("awesome")
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
      </div>
    )
}