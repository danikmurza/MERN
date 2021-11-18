import React from 'react'

import avatar from '../css/img/shop/account/avatar.jpg'
import widget1 from '../css/img/shop/cart/widget/01.jpg'
import widget2 from '../css/img/shop/cart/widget/02.jpg'
import widget3 from '../css/img/shop/cart/widget/03.jpg'
import widget4 from '../css/img/shop/cart/widget/04.jpg'
import {Link} from "react-router-dom";


const YourDetails = () => {
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
                  <a href="/">Shop</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Checkout</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <section className="col-lg-8">
            {/* Steps*/}
            <div className="steps steps-light pt-2 pb-3 mb-5">
              <Link className="step-item active" to="/your_cart">
                <div className="step-progress">
                  <span className="step-count">1</span>
                </div>
                <div className="step-label">
                  <i className="czi-cart"/>
                  Cart
                </div>
              </Link>
              <Link className="step-item active current" to="/your_details">
                <div className="step-progress">
                  <span className="step-count">2</span>
                </div>
                <div className="step-label">
                  <i className="czi-user-circle"/>
                  Your details
                </div>
              </Link>
              <Link className="step-item" to="/shipping">
                <div className="step-progress">
                  <span className="step-count">3</span>
                </div>
                <div className="step-label">
                  <i className="czi-package"/>
                  Shipping
                </div>
              </Link>
              <Link className="step-item" to="/payments">
                <div className="step-progress">
                  <span className="step-count">4</span>
                </div>
                <div className="step-label">
                  <i className="czi-card"/>
                  Payment
                </div>
              </Link>
              <Link className="step-item" to="/review">
                <div className="step-progress">
                  <span className="step-count">5</span>
                </div>
                <div className="step-label">
                  <i className="czi-check-circle"/>
                  Review
                </div>
              </Link>
            </div>
            {/* Autor info*/}
            <div
              className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-lg mb-grid-gutter">
              <div className="media align-items-center">
                <div
                  className="img-thumbnail rounded-circle position-relative"
                  style={{width: "6.375rem"}}
                >
              <span
                className="badge badge-warning"
                data-toggle="tooltip"
                title="Reward points"
              >
                384
              </span>
                  <img
                    className="rounded-circle"
                    src={avatar}
                    alt="Susan Gardner"
                  />
                </div>
                <div className="media-body pl-3">
                  <h3 className="font-size-base mb-0">Susan Gardner</h3>
                  <span className="text-accent font-size-sm">
                s.gardner@example.com
              </span>
                </div>
              </div>
              <a
                className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0"
                href="/"
              >
                <i className="czi-edit mr-2"/>
                Edit profile
              </a>
            </div>
            {/* Shipping address*/}
            <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping
              address</h2>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-fn">First Name</label>
                  <input className="form-control" type="text" id="checkout-fn"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-ln">Last Name</label>
                  <input className="form-control" type="text" id="checkout-ln"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-email">E-mail Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="checkout-email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-phone">Phone Number</label>
                  <input className="form-control" type="text"
                         id="checkout-phone"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-company">Company</label>
                  <input
                    className="form-control"
                    type="text"
                    id="checkout-company"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-country">Country</label>
                  <select className="form-control custom-select"
                          id="checkout-country">
                    <option>Choose country</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Switzerland</option>
                    <option>USA</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-city">Country</label>
                  <select className="form-control custom-select"
                          id="checkout-city">
                    <option>Choose city</option>
                    <option>Amsterdam</option>
                    <option>Berlin</option>
                    <option>Geneve</option>
                    <option>New York</option>
                    <option>Paris</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-zip">ZIP Code</label>
                  <input className="form-control" type="text"
                         id="checkout-zip"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-address-1">Address 1</label>
                  <input
                    className="form-control"
                    type="text"
                    id="checkout-address-1"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkout-address-2">Address 2</label>
                  <input
                    className="form-control"
                    type="text"
                    id="checkout-address-2"
                  />
                </div>
              </div>
            </div>
            <h6 className="mb-3 py-3 border-bottom">Billing address</h6>
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                defaultChecked
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address">
                Same as shipping address
              </label>
            </div>
            {/* Navigation (desktop)*/}
            <div className="d-none d-lg-flex pt-4 mt-3">
              <div className="w-50 pr-3">
                <Link className="btn btn-secondary btn-block" to="/your_cart">
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Cart</span>
                  <span className="d-inline d-sm-none">Back</span>
                </Link>
              </div>
              <div className="w-50 pl-2">
                <Link
                  className="btn btn-primary btn-block"
                  to="/shipping"
                >
                  <span
                    className="d-none d-sm-inline">Proceed to Shipping</span>
                  <span className="d-inline d-sm-none">Next</span>
                  <i className="czi-arrow-right mt-sm-0 ml-1"/>
                </Link>
              </div>
            </div>
          </section>
          {/* Sidebar*/}
          <aside className="col-lg-4 pt-4 pt-lg-0">
            <div
              className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
              <div className="widget mb-3">
                <h2 className="widget-title text-center">Order summary</h2>
                <div className="media align-items-center pb-2 border-bottom">
                  <a className="d-block mr-2" href="/">
                    <img
                      width={64}
                      src={widget1}
                      alt="Product"
                    />
                  </a>
                  <div className="media-body">
                    <h6 className="widget-product-title">
                      <a href="/">Women Colorblock Sneakers</a>
                    </h6>
                    <div className="widget-product-meta">
                  <span className="text-accent mr-2">
                    $150.<small>00</small>
                  </span>
                      <span className="text-muted">x 1</span>
                    </div>
                  </div>
                </div>
                <div className="media align-items-center py-2 border-bottom">
                  <a className="d-block mr-2" href="/">
                    <img
                      width={64}
                      src={widget2}
                      alt="Product"
                    />
                  </a>
                  <div className="media-body">
                    <h6 className="widget-product-title">
                      <a href="/">TH Jeans City Backpack</a>
                    </h6>
                    <div className="widget-product-meta">
                  <span className="text-accent mr-2">
                    $79.<small>50</small>
                  </span>
                      <span className="text-muted">x 1</span>
                    </div>
                  </div>
                </div>
                <div className="media align-items-center py-2 border-bottom">
                  <a className="d-block mr-2" href="/">
                    <img
                      width={64}
                      src={widget3}
                      alt="Product"
                    />
                  </a>
                  <div className="media-body">
                    <h6 className="widget-product-title">
                      <a href="/">3-Color Sun Stash Hat</a>
                    </h6>
                    <div className="widget-product-meta">
                  <span className="text-accent mr-2">
                    $22.<small>50</small>
                  </span>
                      <span className="text-muted">x 1</span>
                    </div>
                  </div>
                </div>
                <div className="media align-items-center py-2 border-bottom">
                  <a className="d-block mr-2" href="/">
                    <img
                      width={64}
                      src={widget4}
                      alt="Product"
                    />
                  </a>
                  <div className="media-body">
                    <h6 className="widget-product-title">
                      <a href="/">Cotton Polo Regular Fit</a>
                    </h6>
                    <div className="widget-product-meta">
                  <span className="text-accent mr-2">
                    $9.<small>00</small>
                  </span>
                      <span className="text-muted">x 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-unstyled font-size-sm pb-2 border-bottom">
                <li
                  className="d-flex justify-content-between align-items-center">
                  <span className="mr-2">Subtotal:</span>
                  <span className="text-right">
                $265.<small>00</small>
              </span>
                </li>
                <li
                  className="d-flex justify-content-between align-items-center">
                  <span className="mr-2">Shipping:</span>
                  <span className="text-right">—</span>
                </li>
                <li
                  className="d-flex justify-content-between align-items-center">
                  <span className="mr-2">Taxes:</span>
                  <span className="text-right">
                $9.<small>50</small>
              </span>
                </li>
                <li
                  className="d-flex justify-content-between align-items-center">
                  <span className="mr-2">Discount:</span>
                  <span className="text-right">—</span>
                </li>
              </ul>
              <h3 className="font-weight-normal text-center my-4">
                $274.<small>50</small>
              </h3>
              <form className="needs-validation" method="post" noValidate>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Promo code"
                    required
                  />
                  <div className="invalid-feedback">Please provide promo code.
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-block"
                        type="submit">
                  Apply promo code
                </button>
              </form>
            </div>
          </aside>
        </div>
        {/* Navigation (mobile)*/}
        <div className="row d-lg-none">
          <div className="col-lg-8">
            <div className="d-flex pt-4 mt-3">
              <div className="w-50 pr-3">
                <a className="btn btn-secondary btn-block" href="/">
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Cart</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 pl-2">
                <a
                  className="btn btn-primary btn-block"
                  href="/"
                >
                  <span
                    className="d-none d-sm-inline">Proceed to Shipping</span>
                  <span className="d-inline d-sm-none">Next</span>
                  <i className="czi-arrow-right mt-sm-0 ml-1"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </>
  )
}

export default YourDetails
