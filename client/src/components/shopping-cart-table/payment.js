import React from 'react'

import payment from '../css/img/cards.png'
import widget1 from '../css/img/shop/cart/widget/01.jpg'
import widget2 from '../css/img/shop/cart/widget/02.jpg'
import widget3 from '../css/img/shop/cart/widget/03.jpg'
import widget4 from '../css/img/shop/cart/widget/04.jpg'
import {Link} from "react-router-dom";


export const Payments = () => {
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
              <Link className="step-item active" to="/your_details">
                <div className="step-progress">
                  <span className="step-count">2</span>
                </div>
                <div className="step-label">
                  <i className="czi-user-circle"/>
                  Your details
                </div>
              </Link>
              <Link className="step-item active" to="/shipping">
                <div className="step-progress">
                  <span className="step-count">3</span>
                </div>
                <div className="step-label">
                  <i className="czi-package"/>
                  Shipping
                </div>
              </Link>
              <Link className="step-item active current" to="/payments">
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
            {/* Payment methods accordion*/}
            <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
            <div className="accordion mb-2" id="payment-method" role="tablist">
              <div className="card">
                <div className="card-header" role="tab">
                  <h3 className="accordion-heading">
                    <a href="/" data-toggle="collapse">
                      <i
                        className="czi-card font-size-lg mr-2 mt-n1 align-middle"/>
                      Pay with Credit Card
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div
                  className="collapse show"
                  id="card"
                  data-parent="#payment-method"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <p className="font-size-sm">
                      We accept following credit cards:&nbsp;&nbsp;
                      <img
                        className="d-inline-block align-middle"
                        src={payment}
                        style={{width: 187}}
                        alt="Cerdit Cards"
                      />
                    </p>
                    <div className="card-wrapper"/>
                    <form className="interactive-credit-card row">
                      <div className="form-group col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          name="number"
                          placeholder="Card Number"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-3">
                        <input
                          className="form-control"
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-3">
                        <input
                          className="form-control"
                          type="text"
                          name="cvc"
                          placeholder="CVC"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <button
                          className="btn btn-outline-primary btn-block mt-0"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab">
                  <h3 className="accordion-heading">
                    <a className="collapsed" href="/" data-toggle="collapse">
                      <i className="czi-paypal mr-2 align-middle"/>
                      Pay with PayPal
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div
                  className="collapse"
                  id="paypal"
                  data-parent="#payment-method"
                  role="tabpanel"
                >
                  <div className="card-body font-size-sm">
                    <p>
                      <span className="font-weight-medium">PayPal</span> - the
                      safer, easier way to pay
                    </p>
                    <form className="row" method="post">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="E-mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="d-flex flex-wrap justify-content-between align-items-center">
                          <a className="nav-link-style" href="/">
                            Forgot password?
                          </a>
                          <button className="btn btn-primary" type="submit">
                            Log In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab">
                  <h3 className="accordion-heading">
                    <a className="collapsed" href="/" data-toggle="collapse">
                      <i className="czi-gift mr-2"/>
                      Redeem Reward Points
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div
                  className="collapse"
                  id="points"
                  data-parent="#payment-method"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <p>
                      You currently have
                      <span className="font-weight-medium">&nbsp;384</span>
                      &nbsp;Reward Points to spend.
                    </p>
                    <div className="custom-control custom-checkbox d-block">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="use_points"
                      />
                      <label className="custom-control-label"
                             htmlFor="use_points">
                        Use my Reward Points to pay for this order.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation (desktop)*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pr-3">
                <Link className="btn btn-secondary btn-block"
                      to="/shipping">
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Shipping</span>
                  <span className="d-inline d-sm-none">Back</span>
                </Link>
              </div>
              <div className="w-50 pl-2">
                <Link className="btn btn-primary btn-block"
                      to="/review">
                  <span className="d-none d-sm-inline">Review your order</span>
                  <span className="d-inline d-sm-none">Review order</span>
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
                <a
                  className="btn btn-secondary btn-block"
                  href="/"
                >
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Shipping</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 pl-2">
                <a
                  className="btn btn-primary btn-block"
                  href="/"
                >
                  <span className="d-none d-sm-inline">Review your order</span>
                  <span className="d-inline d-sm-none">Review order</span>
                  <i className="czi-arrow-right mt-sm-0 ml-1"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
}
