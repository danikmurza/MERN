import React from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import {Link} from "react-router-dom";
import {userAction} from "../../actions";

export const AccountOrders = () => {
  
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
                    <h3 className="font-size-base mb-0">Susan Gardner</h3>
                    <span className="text-accent font-size-sm">
                  s.gardner@example.com
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
                    className="font-size-sm text-muted ml-auto">1</span>
                  </Link>
                </li>
                <li className="border-bottom mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_wishlist"
                  >
                    <i className="czi-heart opacity-60 mr-2"/>
                    Wishlist
                    <span className="font-size-sm text-muted ml-auto">3</span>
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    className="nav-link-style d-flex align-items-center px-4 py-3"
                    to="/account_tickets"
                  >
                    <i className="czi-help opacity-60 mr-2"/>
                    Support tickets
                    <span className="font-size-sm text-muted ml-auto">1</span>
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
                <select className="form-control custom-select" id="order-sort">
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
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      34VB5540K83
                    </a>
                  </td>
                  <td className="py-3">May 21, 2019</td>
                  <td className="py-3">
                    <span className="badge badge-info m-0">In Progress</span>
                  </td>
                  <td className="py-3">$358.75</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      78A643CD409
                    </a>
                  </td>
                  <td className="py-3">December 09, 2018</td>
                  <td className="py-3">
                    <span className="badge badge-danger m-0">Canceled</span>
                  </td>
                  <td className="py-3">
                    <span>$760.50</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      112P45A90V2
                    </a>
                  </td>
                  <td className="py-3">October 15, 2018</td>
                  <td className="py-3">
                    <span className="badge badge-warning m-0">Delayed</span>
                  </td>
                  <td className="py-3">$1,264.00</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      28BA67U0981
                    </a>
                  </td>
                  <td className="py-3">July 19, 2018</td>
                  <td className="py-3">
                    <span className="badge badge-success m-0">Delivered</span>
                  </td>
                  <td className="py-3">$198.35</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      502TR872W2
                    </a>
                  </td>
                  <td className="py-3">April 04, 2018</td>
                  <td className="py-3">
                    <span className="badge badge-success m-0">Delivered</span>
                  </td>
                  <td className="py-3">$2,133.90</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <a
                      className="nav-link-style font-weight-medium font-size-sm"
                      href="/"
                      data-toggle="modal"
                    >
                      47H76G09F33
                    </a>
                  </td>
                  <td className="py-3">March 30, 2018</td>
                  <td className="py-3">
                    <span className="badge badge-success m-0">Delivered</span>
                  </td>
                  <td className="py-3">$86.40</td>
                </tr>
                </tbody>
              </table>
            </div>
            <hr className="pb-4"/>
            {/* Pagination*/}
            <nav
              className="d-flex justify-content-between pt-2"
              aria-label="Page navigation"
            >
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/">
                    <i className="czi-arrow-left mr-2"/>
                    Prev
                  </a>
                </li>
              </ul>
              <ul className="pagination">
                <li className="page-item d-sm-none">
                  <span className="page-link page-link-static">1 / 5</span>
                </li>
                <li
                  className="page-item active d-none d-sm-block"
                  aria-current="page"
                >
              <span className="page-link">
                1<span className="sr-only">(current)</span>
              </span>
                </li>
                <li className="page-item d-none d-sm-block">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item d-none d-sm-block">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item d-none d-sm-block">
                  <a className="page-link" href="/">
                    4
                  </a>
                </li>
                <li className="page-item d-none d-sm-block">
                  <a className="page-link" href="/">
                    5
                  </a>
                </li>
              </ul>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    Next
                    <i className="czi-arrow-right ml-2"/>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
  
}
