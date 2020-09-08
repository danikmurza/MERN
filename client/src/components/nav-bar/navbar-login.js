import React from 'react'
import {Link} from "react-router-dom"
import {userAction} from '../../actions'
import home from './smart-house.svg'
import user from './log.svg'
import grow from './grow-shop.svg'
import {ProductsList} from "../products/products";


export class NavBarLogin extends React.Component {
  
  render() {
    return (
      <div className="navigation mt-2 pt-2 pb-2">
        <nav className="bg-light form-inline row pl-4">
          <div className="col-2 form-inline pr-0">
            <img src={home} alt="home" style={{width: "40px"}}/>
            <h5 className="text-center mb-0 ml-2 text-primary">Electronic
              store</h5>
          </div>
          <div className="col-6 p-0">
            <input className="form-control w-100" type="text"
                   placeholder="Search"/>
          </div>
          <div className="col-sm-1 p-0">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
          <div className="col-1 p-0">
            <img src={user} alt="user" style={{width: "40px"}}/>
            <Link className="nav-item pl-3 text-primary" to="/"
                  onClick={() => userAction.logout()}>
              Logout
            </Link>
          </div>
          <div className="col-2">
            <img src={grow} alt="grow" style={{width: "40px"}}/>
            <button className="btn btn-primary ml-2" type="submit">My Card
            </button>
          </div>
        </nav>
        
        
        <nav className="bg-light pt-1 pb-1">
          <ul className=" form-inline row" style={{listStyle: "none"}}>
            <li className="nav-item col-1">
              <Link className="nav-link " to="/products">Products</Link>
            </li>
            <ProductsList/>
            <li className=" active col-1">
              <Link className="nav-link " to="/">News</Link>
            </li>
            <li className="nav-item col-1">
              <Link className="nav-link " to="/users">Users</Link>
            </li>
            <li className="nav-item col-1">
              <Link className="nav-link" to="/cart">Account</Link>
            </li>
            <li className="nav-item col-1">
              <Link className="nav-link" to="/main">Main</Link>
            </li>
            <li className="nav-item col-1">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    
    )
  }
}




