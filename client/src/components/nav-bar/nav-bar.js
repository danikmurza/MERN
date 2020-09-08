import React from 'react'
import {Link} from "react-router-dom"

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <form className="form-inline col col-lg-4">
            <input className="form-control mr-sm-2" type="text"
                   placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0"
                    type="submit">
              Search
            </button>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </form>
        </nav>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <ul className="navbar-nav col">
            <li className="nav-item active">
              <Link className="nav-link" to="/">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}




