import React, {Component} from 'react'
import avatar from "../css/img/shop/account/avatar.jpg"
import {Link} from "react-router-dom"
import {userAction} from "../../actions"
import {connect} from 'react-redux'

class AccountTickets extends Component {
  state = {
    userId: JSON.parse(localStorage.getItem('user')).userId,
    show: 'none',
    subject: '',
    type: '',
    priority: '',
    description: [],
    status: true,
    tickets: JSON.parse(localStorage.getItem('user')).user.ticket,
    user: JSON.parse(localStorage.getItem('user')).user,
    wishlist: JSON.parse(localStorage.getItem('wishlist'))
  }
  
  submitNewTicket = () => {
    const {userId, subject, type, priority, description, status} = this.state
    this.props.dispatch(userAction.ticket(userId, subject, type, priority, description, status))
    this.setState({show: 'none', userId: '', subject: '', type: '', description: [], priority: '', status: ''})
  }
  
  render() {
    const {show, tickets, user, wishlist} = this.state
    return (
      <>
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
                    <Link to="/account_tickets">Account</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Support tickets
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
              <h1 className="h3 text-light mb-0">Support tickets</h1>
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
                      <h3
                        className="font-size-base mb-0">{user ? user.firstName : null} {user ? user.lastName : null}</h3>
                      <span className="text-accent font-size-sm">
                  {user ? user.email : null}
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
                        className="font-size-sm text-muted ml-auto">{wishlist ? wishlist.length : 0}</span>
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      className="nav-link-style d-flex align-items-center px-4 py-3 active"
                      to="/account_tickets"
                    >
                      <i className="czi-help opacity-60 mr-2"/>
                      Support tickets
                      <span
                        className="font-size-sm text-muted ml-auto">{tickets.length ? tickets.length : 0}</span>
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
                      className="nav-link-style d-flex align-items-center px-4 py-3"
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
                className="d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3">
                <div className="form-inline">
                  <label
                    className="text-light opacity-75 text-nowrap mr-2 d-none d-lg-block"
                    htmlFor="order-sort"
                  >
                    Sort orders:
                  </label>
                  <select className="form-control custom-select"
                          id="order-sort">
                    <option>All</option>
                    <option>Open</option>
                    <option>Closed</option>
                  </select>
                </div>
                <Link className="btn btn-primary btn-sm"
                      onClick={() => userAction.logout()}
                      to="/">
                  <i className="czi-sign-out mr-2"/>
                  Sign out
                </Link>
              </div>
              {/* Tickets list*/}
              <div className="table-responsive font-size-md">
                <table className="table table-hover mb-0">
                  <thead>
                  <tr>
                    <th>Ticket Subject</th>
                    <th>Date Submitted | Updated</th>
                    <th>Type</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    tickets.length > 0 ? tickets.map((ticket, index) => {
                        const {subject, ticketData, ticketUpdate, type, priority, status} = ticket
                        return (
                          <tr key={index}>
                            <td className="py-3">
                              <Link
                                className="nav-link-style font-weight-medium"
                                to="/account_single_ticket">
                                {subject}
                              </Link>
                            </td>
                            <td className="py-3">
                              {new Date(ticketData).toLocaleDateString()} | {new Date(ticketUpdate).toLocaleDateString()}
                            </td>
                            <td className="py-3">{type}</td>
                            <td className="py-3">
                              {priority === 'high'
                                ? <span
                                  className="badge badge-warning m-0">High</span>
                                : null}
                              {priority === 'medium'
                                ? <span
                                  className="badge badge-info m-0">Medium</span>
                                : null}
                              {priority === 'urgent'
                                ? <span
                                  className="badge badge-danger m-0">Urgent</span>
                                : null}
                              {priority === 'low'
                                ? <span
                                  className="badge badge-success m-0">Low</span>
                                : null}
                            </td>
                            <td className="py-3">
                              {status === true
                                ? <span
                                  className="badge badge-success m-0">Open</span>
                                : null}
                              {status === false
                                ? <span
                                  className="badge badge-secondary m-0">Closed</span>
                                : null}
                            </td>
                          </tr>
                        )
                      })
                      : null
                  }
                  </tbody>
                </table>
              </div>
              <hr className="mb-4"/>
              <div className="text-right">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#open-ticket"
                  onClick={() => this.setState({show: 'block'})}
                >
                  Submit new ticket
                </button>
              </div>
            </section>
          </div>
        </div>
        
        
        <div
          className="needs-validation modal fade show"
          // method="post"
          id="open-ticket"
          tabIndex={-1}
          // noValidate
          aria-modal="true"
          style={{paddingRight: 34, display: show}}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Submit new ticket</h5>
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
                <p className="text-muted font-size-sm">
                  We normally respond tickets within 2 business days.
                </p>
                <div className="form-group">
                  <label htmlFor="ticket-subject">Subject</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ticket-subject"
                    onChange={(e) => this.setState({subject: e.target.value})}
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in the subject line!
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="ticket-type">Type</label>
                      <select
                        className="form-control custom-select"
                        id="ticket-type"
                        onChange={(e) => this.setState({type: e.target.value})}
                        required
                      >
                        <option value>Choose type</option>
                        <option value="WebsiteProblem">Website problem</option>
                        <option value="PartnerRequest">Partner request</option>
                        <option value="Complaint">Complaint</option>
                        <option value="InfoInquiry">Info inquiry</option>
                      </select>
                      <div className="invalid-feedback">Please choose ticket
                        type!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="ticket-priority">Priority</label>
                      <select
                        className="form-control custom-select"
                        id="ticket-priority"
                        onChange={(e) => this.setState({priority: e.target.value})}
                        required
                      >
                        <option value>How urgent is your issue?</option>
                        <option value="urgent">Urgent</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                      <div className="invalid-feedback">
                        Please choose how urgent your ticket is!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="ticket-description">Describe your
                    issue</label>
                  <textarea
                    className="form-control"
                    id="ticket-description"
                    rows={8}
                    required
                    onChange={(e) => this.setState({description: e.target.value})}
                    defaultValue={""}
                  />
                  <div className="invalid-feedback">
                    Please provide ticket description!
                  </div>
                </div>
                <div className="custom-file mb-3">
                  <input className="custom-file-input" type="file"
                         id="file-input"/>
                  <label className="custom-file-label" htmlFor="file-input">
                    Choose file...
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                  onClick={() => this.setState({show: 'none'})}
                >
                  Close
                </button>
                <button className="btn btn-primary"
                        type="submit"
                        onClick={this.submitNewTicket}
                >
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

export default connect(null, null)(AccountTickets)
