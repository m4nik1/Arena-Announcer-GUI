import React from "react";

import Home from "../Pages/HomePage"
import Gambling from "../Pages/Gambling"
import { Route, Link } from "react-router-dom"
import Bells from "../Pages/bells";
import "../CSS/side.css"

export default function Sidebar() {
    return (
      <div className="sidebar-nav">
        <nav>
          <ul>
            <li className="top">
              <text className="top-text">Fight Announcer GUI</text>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Bells">Bells</Link>
            </li>
            <li>
              <Link to="/Gambling">Gambling</Link>
            </li>
          </ul>
        </nav>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Gambling">
        <Gambling />
      </Route>
      <Route path="/Bells">
        <Bells />
      </Route>

    </div>
    )
}