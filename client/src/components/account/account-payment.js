import React from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import cardVisa from "../css/img/card-visa.png"
import cardMaster from "../css/img/card-master.png"
import cardPaypal from "../css/img/card-paypal.png"
import {Link} from "react-router-dom";
import {userAction} from "../../actions";

export const AccountPayment = () => {
  
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
                  <a className="text-nowrap" href="/">
                    <i className="czi-home"/>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="/">Account</a>
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
                    className="nav-link-style d-flex align-items-center px-4 py-3"
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
                <tr>
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
                        Visa
                      </span>
                        ending in 4999
                        <span className="align-middle badge badge-info ml-2">
                        Primary
                      </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 align-middle">Susan Gardner</td>
                  <td className="py-3 align-middle">08 / 2019</td>
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
                <tr>
                  <td className="py-3 align-middle">
                    <div className="media align-items-center">
                      <img
                        className="mr-2"
                        src={cardMaster}
                        width={39}
                        alt="MesterCard"
                      />
                      <div className="media-body">
                      <span className="font-weight-medium text-heading mr-1">
                        MasterCard
                      </span>
                        ending in 0015
                      </div>
                    </div>
                  </td>
                  <td className="py-3 align-middle">Susan Gardner</td>
                  <td className="py-3 align-middle">11 / 2021</td>
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
                <tr>
                  <td className="py-3 align-middle">
                    <div className="media align-items-center">
                      <img
                        className="mr-2"
                        src={cardPaypal}
                        width={39}
                        alt="PayPal"
                      />
                      <div className="media-body">
                      <span className="font-weight-medium text-heading mr-1">
                        PayPal
                      </span>
                        s.gardner@example.com
                      </div>
                    </div>
                  </td>
                  <td className="py-3 align-middle">—</td>
                  <td className="py-3 align-middle">—</td>
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
                <tr>
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
                        Visa
                      </span>
                        ending in 6073
                      </div>
                    </div>
                  </td>
                  <td className="py-3 align-middle">Susan Gardner</td>
                  <td className="py-3 align-middle">09 / 2021</td>
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
                <tr>
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
                        Visa
                      </span>
                        ending in 9791
                      </div>
                    </div>
                  </td>
                  <td className="py-3 align-middle">Susan Gardner</td>
                  <td className="py-3 align-middle">05 / 2021</td>
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
                </tbody>
              </table>
            </div>
            <hr className="pb-4"/>
            <div className="text-sm-right">
              <a
                className="btn btn-primary"
                href="/"
                data-toggle="modal"
              >
                Add payment method
              </a>
            </div>
          </section>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
  
}
