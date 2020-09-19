import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {filters} from '../../actions'
import france from "../css/img/flags/fr.png"
import deutsch from "../css/img/flags/de.png"
import usaFlag from "../css/img/flags/en.png"
import italiano from "../css/img/flags/it.png"
import logoDark from "../css/img/logo-dark.png"

import departments1 from "../css/img/shop/departments/01.jpg"
import departments2 from "../css/img/shop/departments/02.jpg"
import departments3 from "../css/img/shop/departments/03.jpg"
import departments4 from "../css/img/shop/departments/04.jpg"
import departments5 from "../css/img/shop/departments/05.jpg"
import departments6 from "../css/img/shop/departments/06.jpg"


class Header extends Component {
  state = {
    data: JSON.parse(localStorage.getItem('user')),
    cart: JSON.parse(localStorage.getItem('products')),
    wishlist: JSON.parse(localStorage.getItem('wishlist')),
    compare: JSON.parse(localStorage.getItem('compare')),
    input: '',
    remove: 0
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.loggingIn !== this.props.loggingIn) {
      this.setState({remove: 1})
    }
  }
  
  filterByInput = (e) => {
    e.preventDefault()
    this.setState({input: e.target.value})
  }
  
  searchProduct = (e) => {
    const {dispatch} = this.props
    e.preventDefault()
    dispatch(filters.filterByValue(this.state.input))
  }
  
  removeCart = (e) => {
    let products = this.state.cart.filter(product => product._id !== e.currentTarget.value)
    localStorage.setItem('products', JSON.stringify(products))
    this.setState({cart: JSON.parse(localStorage.getItem('products'))})
  }
  
  render() {
    let {data, cart, wishlist, compare} = this.state
    let summa = 0
    if (cart) {
      let sum = []
      cart.map((a) => sum.push(a.price))
      summa = cart.map((a) => a.price * a.count)
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    }
    
    
    return (
      <header className="box-shadow-sm">
        <div className="topbar topbar-dark bg-dark">
          <div className="container">
            <div>
              <div className="topbar-text dropdown disable-autohide">
                <a
                  className="topbar-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  <img
                    className="mr-2"
                    width={20}
                    src={usaFlag}
                    alt="English"
                  />
                  Eng / $
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <select className="custom-select custom-select-sm">
                      <option value="usd">$ USD</option>
                      <option value="eur">€ EUR</option>
                      <option value="ukp">£ UKP</option>
                      <option value="jpy">¥ JPY</option>
                    </select>
                  </li>
                  <li>
                    <a className="dropdown-item pb-1" href="#">
                      <img
                        className="mr-2"
                        width={20}
                        src={france}
                        alt="Français"
                      />
                      Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item pb-1" href="#">
                      <img
                        className="mr-2"
                        width={20}
                        src={deutsch}
                        alt="Deutsch"
                      />
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img
                        className="mr-2"
                        width={20}
                        src={italiano}
                        alt="Italiano"
                      />
                      Italiano
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="topbar-text text-nowrap d-none d-md-inline-block border-left border-light pl-3 ml-3">
                <span className="text-muted mr-1">Available 24/7 at</span>
                <a className="topbar-link" href="tel:00331697720">
                  (00) 33 169 7720
                </a>
              </div>
            </div>
            <div className="topbar-text dropdown d-md-none ml-auto">
              <a
                className="topbar-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Wishlist / Compare / Track
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <Link className="dropdown-item" to="/account_wishlist">
                    <i className="czi-heart text-muted mr-2"/>
                    Wishlist ({wishlist ? wishlist.length : "0"})
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/compare">
                    <i className="czi-compare text-muted mr-2"/>
                    Compare ({compare ? compare.length : "0"})
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/order_tracking">
                    <i className="czi-location text-muted mr-2"/>
                    Order tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-none d-md-block ml-3 text-nowrap">
              <Link
                className="topbar-link d-none d-md-inline-block"
                to="/account_wishlist"
              >
                <i className="czi-heart mt-n1"/>
                Wishlist ({wishlist ? wishlist.length : "0"})
              </Link>
              <Link
                className="topbar-link ml-3 pl-3 border-left border-light d-none d-md-inline-block"
                to="/compare"
              >
                <i className="czi-compare mt-n1"/>
                Compare ({compare ? compare.length : "0"})
              </Link>
              <Link
                className="topbar-link ml-3 border-left border-light pl-3 d-none d-md-inline-block"
                to="/order_tracking"
              >
                <i className="czi-location mt-n1"/>
                Order tracking
              </Link>
            </div>
          </div>
        </div>
        ;
        
        
        {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
        
        <div className="navbar-sticky bg-light">
          <div className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link
                className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0"
                to="/"
                style={{minWidth: "7rem"}}>
                <img width={142} src={logoDark} alt="Cartzilla"/>
              </Link>
              <div className="input-group-overlay d-none d-lg-flex mx-4">
                <input className="form-control appended-form-control"
                       type="text"
                       placeholder="Search for products"
                
                       onChange={this.filterByInput}
                />
                <div className="input-group-append-overlay">
              <span className="input-group-text">
                <i className="czi-search"
                   onClick={this.searchProduct}
                />
              </span>
                </div>
              </div>
              <div
                className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="/navbarCollapse">
                  <span className="navbar-toggler-icon"/>
                </button>
                <a className="navbar-tool navbar-stuck-toggler" href="/">
                  <span className="navbar-tool-tooltip">Expand menu</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon czi-menu"/>
                  </div>
                </a>
                <Link className="navbar-tool d-none d-lg-flex"
                      to="/account_wishlist">
                  <span className="navbar-tool-tooltip">Wishlist</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon czi-heart"/>
                  </div>
                </Link>
                <Link className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2"
                      to="/my_account"
                      data-toggle="modal">
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon czi-user"/>
                  </div>
                  <div className="navbar-tool-text ml-n3">
                    <small>Hello, Sign in</small>My Account
                  </div>
                </Link>
                <div className="navbar-tool dropdown ml-3">
                  <Link
                    className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                    to="/your_cart">
                    {cart
                      ? <span className="navbar-tool-label">{cart.length}</span>
                      : null
                    }
                    <i className="navbar-tool-icon czi-cart"/>
                  </Link>
                  <Link className="navbar-tool-text" to="/your_cart">
                    <small>My Cart</small>
                    {cart ? `${summa}` : "0"}
                  </Link>
                  {/* Cart dropdown*/}
                  <div className="dropdown-menu dropdown-menu-right"
                       style={{width: "20rem"}}>
                    <div className="widget widget-cart px-3 pt-2 pb-3">
                      <div style={{height: "15rem"}}
                           data-simplebar=""
                           data-simplebar-auto-hide="false">
                        <ul style={{listStyle: "none"}} className="m-0 p-0">
                          <div className="widget-cart-item pb-2 border-bottom">
                            {cart
                              ? cart.map((product, index) => {
                                const {name, price, count, img} = product
                                return (
                                  <li style={{listStyle: "none"}} key={index}>
                                    <div
                                      className="widget-cart-item py-2 border-bottom">
                                      <button
                                        className="close text-danger"
                                        type="button"
                                        aria-label="Remove"
                                        value={product._id}
                                        onClick={this.removeCart}
                                      >
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <div className="media align-items-center">
                                        <a className="d-block mr-2" href="/">
                                          <img
                                            width={64}
                                            src={img}
                                            alt="Product"
                                          />
                                        </a>
                                        <div className="media-body">
                                          <h6 className="widget-product-title">
                                            <a href="/">
                                              {name}
                                            </a>
                                          </h6>
                                          <div className="widget-product-meta">
                                          <span className="text-accent mr-2">
                                          ${price}
                                          </span>
                                            <span
                                              className="text-muted">x {count}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              })
                              : null}
                          </div>
                        </ul>
                      </div>
                      <div
                        className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="font-size-sm mr-2 py-2">
                          <span className="text-muted">Subtotal:</span>
                          <span className="text-accent font-size-base ml-1">
                        {cart ? `${summa}` : '0'}
                      </span>
                        </div>
                        <a className="btn btn-outline-secondary btn-sm"
                           href="/">
                          Expand cart
                          <i className="czi-arrow-right ml-1 mr-n1"/>
                        </a>
                      </div>
                      <Link className="btn btn-primary btn-sm btn-block"
                            to="/your_cart">
                        <i
                          className="czi-card mr-2 font-size-base align-middle"/>
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarCollapse">
                {/* Search*/}
                
                <div className="input-group-overlay d-lg-none my-3">
                  <div className="input-group-prepend-overlay">
                <span className="input-group-text">
                  <i className="czi-search"/>
                </span>
                  </div>
                  <input className="form-control prepended-form-control"
                         type="text"
                         placeholder="Search for products"
                  />
                </div>
                {/* Departments menu*/}
                <ul className="navbar-nav mega-nav pr-lg-2 mr-lg-2">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle pl-0"
                       href="/"
                       data-toggle="dropdown"
                    >
                      <i className="czi-view-grid mr-2"/>
                      Departments
                    </a>
                    <div className="dropdown-menu px-2 pl-0 pb-4">
                      <div className="d-flex flex-wrap flex-md-nowrap">
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments1} alt="Shoes"/>
                            </a>
                            <h6 className="font-size-base mb-2">Clothing</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Women's clothing
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Men's clothing
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Kid's clothing
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments2} alt="Shoes"/>
                            </a>
                            <h6 className="font-size-base mb-2">Shoes</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Women's shoes
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Men's shoes
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Kid's shoes
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments3} alt="Shoes"/>
                            </a>
                            <h6 className="font-size-base mb-2">Gadgets</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Smartphones &amp; Tablets
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Wearable gadgets
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  E-book readers
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap flex-md-nowrap">
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments4} alt="Shoes"/>
                            </a>
                            <h6 className="font-size-base mb-2">
                              Furniture &amp; Decor
                            </h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Home furniture
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Office furniture
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Lighting and decoration
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments5} alt="Shoes"/>
                            </a>
                            <h6 className="font-size-base mb-2">Accessories</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Hats
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Sunglasses
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Bags
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-3">
                          <div className="widget widget-links">
                            <a
                              className="d-block overflow-hidden rounded-lg mb-3"
                              href="/"
                            >
                              <img src={departments6} alt="Shoes"/>
                            </a>
                            <h6
                              className="font-size-base mb-2">Entertainment</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Kid's toys
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Video games
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a className="widget-list-link" href="/">
                                  Outdoor / Camping
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Primary menu*/}
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      data-toggle="dropdown"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/store"
                      data-toggle="dropdown"
                    >
                      Shop
                    </Link>
                  </li>
                  
                  {data &&
                  
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle"
                          to="/account_orders"
                          data-toggle="dropdown">
                      Account
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <Link className="dropdown-item dropdown-toggle"
                              to="/account_orders"
                              data-toggle="dropdown">
                          Shop User Account
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item"
                                  to="/account_orders">
                              Orders History
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item"
                                  to="/account_profile">
                              Profile Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/account_address">
                              Account Addresses
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/account_payment">
                              Payment Methods
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item"
                                  to="/account_wishlist">
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item"
                                  to="/account_tickets">
                              My Tickets
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item"
                                  to="/account_single_ticket">
                              Single Ticket
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/my_account">
                          Sign In / Sign Up
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item"
                              to="/recovery_password">
                          Password Recovery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  
                  }
                  
                  
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle"
                          to="/"
                          data-toggle="dropdown">
                      Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="dropdown-divider"/>
                      <li>
                        <Link className="dropdown-item" to="/about_page">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/contacts">
                          Contacts
                        </Link>
                      </li>
                      <li className="dropdown">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          to="/help_topics"
                          data-toggle="dropdown"
                        >
                          Help Center
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/help_topics">
                              Help Topics
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/help_single_topic"
                            >
                              Single Topic
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/submit_request"
                            >
                              Submit a Request
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({authentication: {loggingIn, user}}) => {
  return {loggingIn, user}
}


export default connect(mapStateToProps, null)(Header)
