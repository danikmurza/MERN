import React, {Component} from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import {Link} from "react-router-dom";
import {userAction} from "../../actions"
import {connect} from 'react-redux'

class AccountOrders extends Component {
  
  state = {
    show: 'none',
    orders: JSON.parse(localStorage.getItem('user')).user.orders,
    orderNumber: '',
    date: '',
    status: '',
    total: '',
    cart: [],
    user: JSON.parse(localStorage.getItem('user')).user,
    wishlist: JSON.parse(localStorage.getItem('wishlist'))
  }
  
  openList = (e) => {
    e.preventDefault()
    let modalList = this.state.orders.filter((order => order.orderNumber === e.currentTarget.value))
    this.setState({
      orderNumber: modalList[0].orderNumber,
      total: modalList[0].total,
      cart: modalList[0].cart
    })
    this.setState({show: 'block'})
  }
  
  render() {
    const {orderNumber, total, cart, show, orders, user, wishlist} = this.state
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
                    <Link to="/account_orders">Account</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Orders history
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
              <h1 className="h3 text-light mb-0">My orders</h1>
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
                        className="font-size-base mb-0">{user.firstName} {user.lastName}</h3>
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
                      className="nav-link-style d-flex align-items-center px-4 py-3 active"
                      to="/account_orders">
                      <i className="czi-bag opacity-60 mr-2"/>
                      Orders<span
                      className="font-size-sm text-muted ml-auto">{orders.length > 0 ? orders.length : 0}</span>
                    </Link>
                  </li>
                  <li className="border-bottom mb-0">
                    <Link
                      className="nav-link-style d-flex align-items-center px-4 py-3"
                      to="/account_wishlist"
                    >
                      <i className="czi-heart opacity-60 mr-2"/>
                      Wishlist
                      <span className="font-size-sm text-muted ml-auto">
                        {wishlist ? wishlist.length : 0}
                      </span>
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
                        className="font-size-sm text-muted ml-auto">{user.ticket.length ? user.ticket.length : 0}</span>
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
                    <Link
                      className="nav-link-style d-flex align-items-center px-4 py-3"
                      onClick={() => userAction.logout()}
                      to="/"
                    >
                      <i className="czi-sign-out opacity-60 mr-2"/>
                      Sign out
                    </Link>
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
                    <option>Delivered</option>
                    <option>In Progress</option>
                    <option>Delayed</option>
                    <option>Canceled</option>
                  </select>
                </div>
                <Link
                  className="btn btn-primary btn-sm d-none d-lg-inline-block"
                  onClick={() => userAction.logout()}
                  to="/"
                >
                  <i className="czi-sign-out mr-2"/>
                  Sign out
                </Link>
              </div>
              {/* Orders list*/}
              <div className="table-responsive font-size-md">
                <table className="table table-hover mb-0">
                  <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date Purchased</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  {orders.length > 0 ? orders.map((order, index) => {
                      return (
                        <tr key={index}>
                          <td className="py-3">
                            <button
                              className="nav-link-style font-weight-medium font-size-sm pl-0"
                              style={{backgroundColor: 'white', border: 'none'}}
                              data-toggle="modal"
                              value={order !== null ? order.orderNumber: null}
                              onClick={(e) => this.openList(e)}
                            >
                              {order !== null ? order.orderNumber: null}
                            </button>
                          </td>
                          <td
                            className="py-3">{orders.length > 0 ? new Date(order.date).toDateString() : null}</td>
                          <td className="py-3">
                            {order.status === 'InProgress' ? <span
                              className="badge badge-info m-0">In Progress</span> : null}
                            {order.status === 'Canceled' ? <span
                              className="badge badge-danger m-0">Canceled</span> : null}
                            {order.status === 'Delayed' ? <span
                              className="badge badge-warning m-0">Delayed</span> : null}
                            {order.status === 'Delivered' ? <span
                              className="badge badge-success m-0">Delivered</span> : null}
                          </td>
                          <td className="py-3">${order.total}</td>
                        </tr>
                      )
                    })
                    : null
                  }
                  </tbody>
                </table>
              </div>
              <hr className="pb-4"/>
              {/* Pagination*/}
            </section>
          </div>
        </div>
        {/* Footer*/}
        
        
        <div
          className="modal fade show"
          id="order-details"
          aria-modal="true"
          style={{paddingRight: 34, display: show}}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order No - {orderNumber}</h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => this.setState({show: 'none'})}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body pb-0">
                {/* Item*/}
                <ul className="m-0 p-0" style={{listStyle: "none"}}>
                  {cart
                    ? cart.map((product, index) => {
                      const {name, price, count, img, brand} = product
                      return (
                        <li className="m-0 p-0" key={index}>
                          <div
                            className="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom">
                            <div
                              className="media d-block d-sm-flex text-center text-sm-left">
                              <a
                                className="d-inline-block mx-auto mr-sm-4"
                                href="/"
                                style={{width: "10rem"}}
                              >
                                <img src={img} alt="Product"/>
                              </a>
                              <div className="media-body pt-2">
                                <h3
                                  className="product-title font-size-base mb-2">
                                  <a href="/">{name}</a>
                                </h3>
                                <div className="font-size-sm">
                                  <span
                                    className="text-muted mr-2">Brand:</span>{brand}
                                </div>
                                
                                <div className="font-size-lg text-accent pt-2">
                                  ${price}
                                </div>
                              </div>
                            </div>
                            <div
                              className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                              <div className="text-muted mb-2">Quantity:</div>
                              {count}
                            </div>
                            <div
                              className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                              <div className="text-muted mb-2">Subtotal</div>
                              ${count * price}
                              <small>00</small>
                            </div>
                          </div>
                        </li>
                      )
                    })
                    : null}
                </ul>
              </div>
              {/* Footer*/}
              <div
                className="modal-footer flex-wrap justify-content-between bg-secondary font-size-md">
                <div className="px-2 py-1">
                  <span className="text-muted">Subtotal:&nbsp;</span>
                  <span>
            ${total}
          </span>
                </div>
                <div className="px-2 py-1">
                  <span className="text-muted">Shipping:&nbsp;</span>
                  <span>
            $22.<small>50</small>
          </span>
                </div>
                <div className="px-2 py-1">
                  <span className="text-muted">Tax:&nbsp;</span>
                  <span>
            $9.<small>50</small>
          </span>
                </div>
                <div className="px-2 py-1">
                  <span className="text-muted">Total:&nbsp;</span>
                  <span className="font-size-lg">
            ${total}
          </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

export default connect(null, null)(AccountOrders)
