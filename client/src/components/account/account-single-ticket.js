import React from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import testimonials3 from "../css/img/testimonials/03.jpg"
import testimonials4 from "../css/img/testimonials/04.jpg"
import {Link} from "react-router-dom";
import {userAction} from "../../actions";

const AccountSingleTicket = () => {
  
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
                  Single ticket
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Signle ticket</h1>
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
                    className="nav-link-style d-flex align-items-center px-4 py-3 active"
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
              <div className="d-flex w-100 text-light text-center mr-3">
                <div className="font-size-ms px-3">
                  <div className="font-weight-medium">Date Submitted</div>
                  <div className="opacity-60">09/27/2019</div>
                </div>
                <div className="font-size-ms px-3">
                  <div className="font-weight-medium">Last Updated</div>
                  <div className="opacity-60">09/30/2019</div>
                </div>
                <div className="font-size-ms px-3">
                  <div className="font-weight-medium">Type</div>
                  <div className="opacity-60">Website problem</div>
                </div>
                <div className="font-size-ms px-3">
                  <div className="font-weight-medium">Priority</div>
                  <span className="badge badge-warning">High</span>
                </div>
                <div className="font-size-ms px-3">
                  <div className="font-weight-medium">Status</div>
                  <span className="badge badge-success">Open</span>
                </div>
              </div>
              <Link className="btn btn-primary btn-sm"
                    onClick={() => userAction.logout()}
                    to="/">
                <i className="czi-sign-out mr-2"/>
                Sign out
              </Link>
            </div>
            {/* Ticket details (visible on mobile)*/}
            <div
              className="d-flex d-lg-none flex-wrap bg-secondary text-center rounded-lg pt-4 px-4 pb-1 mb-4">
              <div className="font-size-sm px-3 pb-3">
                <div className="font-weight-medium">Date Submitted</div>
                <div className="text-muted">09/27/2019</div>
              </div>
              <div className="font-size-sm px-3 pb-3">
                <div className="font-weight-medium">Last Updated</div>
                <div className="text-muted">09/30/2019</div>
              </div>
              <div className="font-size-sm px-3 pb-3">
                <div className="font-weight-medium">Type</div>
                <div className="text-muted">Website problem</div>
              </div>
              <div className="font-size-sm px-3 pb-3">
                <div className="font-weight-medium">Priority</div>
                <span className="badge badge-warning">High</span>
              </div>
              <div className="font-size-sm px-3 pb-3">
                <div className="font-weight-medium">Status</div>
                <span className="badge badge-success">Open</span>
              </div>
            </div>
            {/* Comment*/}
            <div className="media pb-4 border-bottom">
              <img
                className="rounded-circle"
                width={50}
                src={testimonials3}
                alt="Michael Davis"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-md mb-2">Michael Davis</h6>
                <p className="font-size-md mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  nisi ut aliquip ex ea commodo consequat cupidatat non
                  proident,
                  sunt in culpa qui.
                </p>
                <span className="font-size-ms text-muted">
              <i className="czi-time align-middle mr-2"/>
              Sep 30, 2019 at 11:05AM
            </span>
              </div>
            </div>
            {/* Comment reply*/}
            <div className="media py-4 border-bottom">
              <img
                className="rounded-circle"
                width={50}
                src={testimonials3}
                alt="Michael Davis"
              />
              <div className="media-body pl-3">
                <h6 className="font-size-md mb-2">Michael Davis</h6>
                <p className="font-size-md mb-1">
                  Sed elementum tempus egestas sed sed. Aliquam faucibus purus
                  in
                  massa tempor nec feugiat. Interdum varius sit amet mattis.
                  Magna
                  ac placerat vestibulum lectus mauris. Magna fringilla urna
                  porttitor rhoncus dolor purus non. Urna et pharetra pharetra
                  massa
                  massa ultricies mi quis.
                </p>
                <span className="font-size-ms text-muted">
              <i className="czi-time align-middle mr-2"/>
              Sep 28, 2019 at 10:00AM
            </span>
                {/* Comment*/}
                <div className="media border-top pt-4 mt-4">
                  <img
                    className="rounded-circle"
                    width={50}
                    src={testimonials4}
                    alt="Susan Gardner"
                  />
                  <div className="media-body pl-3">
                    <h6 className="font-size-md mb-2">Susan Gardner</h6>
                    <p className="font-size-md mb-1">
                      Egestas sed sed risus pretium quam vulputate dignissim. A
                      diam
                      sollicitudin tempor id eu nisl. Ut porttitor leo a diam.
                      Bibendum at varius vel pharetra vel turpis nunc.
                    </p>
                    <span className="font-size-ms text-muted">
                  <i className="czi-time align-middle mr-2"/>
                  Sep 27, 2019 at 6:30PM
                </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Leave message*/}
            <h3 className="h5 mt-2 pt-4 pb-2">Leave a Message</h3>
            <form className="needs-validation" noValidate>
              <div className="form-group">
            <textarea
              className="form-control"
              rows={8}
              placeholder="Write your message here..."
              required
              defaultValue={""}
            />
                <div className="invalid-tooltip">Please write the message!</div>
              </div>
              <div
                className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="custom-control custom-checkbox d-block">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="close-ticket"
                  />
                  <label className="custom-control-label"
                         htmlFor="close-ticket">
                    Submit and close the ticket
                  </label>
                </div>
                <button className="btn btn-primary my-2" type="submit">
                  Submit message
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      {/* Footer*/}
    </>
  )
  
}
export default AccountSingleTicket
