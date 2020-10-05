import React, {useState} from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import cardVisa from "../css/img/card-visa.png"
import cardPaypal from "../css/img/card-paypal.png"
import {Link} from "react-router-dom";
import {userAction} from "../../actions"
import cards from '../css/img/cards.png'
import {ID} from '../localStorage/local-storage'

export const AccountPayment = () => {
  const [show, setShow] = useState('none')
  const [cardNumber, setCardNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [date, setDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [method, setMethod] = useState('card')
  const [payments] = useState(JSON.parse(localStorage.getItem('payment')))
  const [user] = useState(JSON.parse(localStorage.getItem('user')).user)
  const [wishlist] = useState(JSON.parse(localStorage.getItem('wishlist')))
  
  const addCards = (e) => {
    e.preventDefault()
    let payments = []
    if (JSON.parse(localStorage.getItem('payment'))) {
      payments = JSON.parse(localStorage.getItem('payment'))
    }
    payments.push({_id: ID(), cardNumber, fullName, date, cvc, method})
    localStorage.setItem('payment', JSON.stringify(payments))
    setShow('none')
  }
  
  
  return (
    <div>
      {/* Page Title*/}
      <div className="page-title-overlap bg-dark pt-4">
        <div
          className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to="/">
                    <i className="czi-home"/>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <Link to="/account_payment">Account</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Payment methods
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">My payment methods</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container pb-5 mb-2 mb-md-3">
        <div className="row">
          {/* Sidebar*/}
          <aside className="col-lg-4 pt-4 pt-lg-0">
            <div
              className="cz-sidebar-static rounded-lg box-shadow-lg px-0 pb-0 mb-5 mb-lg-0">
              <div className="px-4 mb-4">
                <div className="media align-items-center">
                  <div
                    className="img-thumbnail rounded-circle position-relative"
                    style={{width: "6.375rem"}}>
                <span className="badge badge-warning"
                      data-toggle="tooltip"
                      title="Reward points">
                  384
                </span>
                    <img className="rounded-circle"
                         src={avatar}
                         alt="Susan Gardner"/>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="font-size-base mb-0">
                      {user.firstName + "  " + user.lastName}</h3>
                    <span className="text-accent font-size-sm">
                  {user.email}
                </span>
                  </div>
                </div>
              </div>
              <div className="bg-secondary px-4 py-3">
                <h3 className="font-size-sm mb-0 text-muted">Dashboard</h3>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="border-bottom mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_orders">
                    <i className="czi-bag opacity-60 mr-2"/>
                    Orders<span
                    className="font-size-sm text-muted ml-auto">{user.orders.length > 0 ? user.orders.length : 0}</span>
                  </Link>
                </li>
                <li className="border-bottom mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_wishlist"
                  >
                    <i className="czi-heart opacity-60 mr-2"/>
                    Wishlist
                    <span
                      className="font-size-sm text-muted ml-auto">{wishlist.length > 0 ? wishlist.length : 0}</span>
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_tickets"
                  >
                    <i className="czi-help opacity-60 mr-2"/>
                    Support tickets
                    <span
                      className="font-size-sm text-muted ml-auto">{user.ticket.length > 0 ? user.ticket.length : 0}</span>
                  </Link>
                </li>
              </ul>
              <div className="bg-secondary px-4 py-3">
                <h3 className="font-size-sm mb-0 text-muted">Account
                  settings</h3>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="border-bottom mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_profile"
                  >
                    <i className="czi-user opacity-60 mr-2"/>
                    Profile info
                  </Link>
                </li>
                <li className="border-bottom mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_address"
                  >
                    <i className="czi-location opacity-60 mr-2"/>
                    Addresses
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3 active"
                    to="/account_payment"
                  >
                    <i className="czi-card opacity-60 mr-2"/>
                    Payment methods
                  </Link>
                </li>
                <li className="d-lg-none border-top mb-0">
                  <a
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    href="/"
                  >
                    <i className="czi-sign-out opacity-60 mr-2"/>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* Content  */}
          <section className="col-lg-8">
            {/* Toolbar*/}
            <div
              className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-4">
              <h6 className="font-size-base text-light mb-0">
                Primary payment method is used by default
              </h6>
              <Link className="btn btn-primary btn-sm"
                    onClick={() => userAction.logout()}
                    to="/">
                <i className="czi-sign-out mr-2"/>
                Sign out
              </Link>
            </div>
            {/* Payment methods list*/}
            <div className="table-responsive font-size-md">
              <table className="table table-hover mb-0">
                <thead>
                <tr>
                  <th>Your credit / debit cards</th>
                  <th>Name on card</th>
                  <th>Expires on</th>
                  <th/>
                </tr>
                </thead>
                <tbody>
                {
                  payments.length > 0 ? payments.map((payment, index) => {
                      const {cartNumber, fullName, date, card} = payment
                      return (
                        <tr key={index}>
                          <td className="py-3 align-middle">
                            <div className="media align-items-center">
                              <img
                                className="mr-2"
                                src={cardVisa}
                                width={39}
                                alt="Visa"
                              />
                              <div className="media-body">
                      <span className="font-weight-medium text-heading mr-1">
                        {card}
                      </span>
                                ending in {cartNumber}
                                <span
                                  className="align-middle badge badge-info ml-2">Primary</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 align-middle">{fullName}</td>
                          <td className="py-3 align-middle">{date}</td>
                          <td className="py-3 align-middle">
                            <a
                              className="nav-link-style mr-2"
                              href="/"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <i className="czi-edit"/>
                            </a>
                            <a
                              className="nav-link-style text-danger"
                              href="/"
                              data-toggle="tooltip"
                              title="Remove"
                            >
                              <div className="czi-trash"/>
                            </a>
                          </td>
                        </tr>
                      )
                    })
                    : null
                }
                </tbody>
              </table>
            </div>
            <hr className="pb-4"/>
            <div className="text-sm-right">
              <button
                className="btn btn-primary"
                onClick={() => setShow('block')}
                data-toggle="modal"
              >
                Add payment method
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* Footer*/}
      
      
      <div
        className="needs-validation modal fade show"
        //  method="post"
        id="add-payment"
        tabIndex={-1}
        // noValidate
        aria-modal="true"
        style={{paddingRight: 34, display: show}}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a payment method</h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => this.setState({show: 'none'})}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="custom-control custom-radio mb-4">
                <input
                  className="custom-control-input"
                  type="radio"
                  id="paypal"
                  name="payment-method"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                  <img
                    className="d-inline-block align-middle ml-2"
                    src={cardPaypal}
                    width={39}
                    alt="PayPal"
                  />
                </label>
              </div>
              <div className="custom-control custom-radio mb-4">
                <input
                  className="custom-control-input"
                  type="radio"
                  id="card"
                  value={method}
                  onChange={() => setMethod('card')}
                  name="payment-method"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="card">
                  Credit / Debit card
                  <img
                    className="d-inline-block align-middle ml-2"
                    src={cards}
                    width={187}
                    alt="Credit card"
                  />
                </label>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <input
                    className="form-control"
                    type="text"
                    name="number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in the card number!
                  </div>
                </div>
                <div className="form-group col-sm-6">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide name on the card!
                  </div>
                </div>
                <div className="form-group col-sm-3">
                  <input
                    className="form-control"
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide card expiration date!
                  </div>
                </div>
                <div className="form-group col-sm-3">
                  <input
                    className="form-control"
                    type="text"
                    name="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide card CVC code!
                  </div>
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-primary btn-block mt-0"
                          type="submit"
                          onClick={addCards}
                  >
                    Register this card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
  
}
