import React, { useState } from "react"

import Button from 'react-bootstrap/Button';
import "../CSS/content.css"
import axios from "axios";
// import postRequest from "../other/requests";


export default function Bells() {
  const [options, setOptions] = useState(["Nothing"])

  function leagueWinButton(e)
  {
    e.preventDefault()
    axios({
      method:'post',
      url: "http://localhost:8080/test",
      data: { 
        first: "options"
       }
    });

    console.log(options)
  }

  function changeOption(stuff)
  {
    setOptions(stuff)
  }


    return (
      <div className="content">
        <h1>This is the Bells page!</h1>
        <form onSubmit={leagueWinButton}>
          <select onChange={changeOption}>
            <option value="Nothing">Pick a degen...</option>
            <option value="Akash">GUI Snas, Irelia's Bone Plating</option>
            <option value="Manik">Patrick Prime the 9th</option>
          </select>
          <input type="submit" value="League Win" />
        </form>

        <Button variant="dark" onClick={leagueWinButton}>Ping server</Button>
      </div>
    )
}