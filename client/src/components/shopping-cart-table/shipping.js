import React from 'react'

import widget1 from '../css/img/shop/cart/widget/01.jpg'
import widget2 from '../css/img/shop/cart/widget/02.jpg'
import widget3 from '../css/img/shop/cart/widget/03.jpg'
import widget4 from '../css/img/shop/cart/widget/04.jpg'
import {Link} from "react-router-dom";

export const Shipping = () => {
  return (<div>
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
              <Link className="step-item active current" to="/shipping">
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
            {/* Shipping methods table*/}
            <h2 className="h6 pb-3 mb-2">Choose shipping method</h2>
            <div className="table-responsive">
              <table className="table table-hover font-size-sm border-bottom">
                <thead>
                <tr>
                  <th className="align-middle"/>
                  <th className="align-middle">Shipping method</th>
                  <th className="align-middle">Delivery time</th>
                  <th className="align-middle">Handling fee</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="courier"
                        name="shipping-method"
                        defaultChecked
                      />
                      <label className="custom-control-label"
                             htmlFor="courier"/>
                    </div>
                  </td>
                  <td className="align-middle">
                    <span
                      className="text-dark font-weight-medium">Courier</span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone), United States &amp; Canada
                  </span>
                  </td>
                  <td className="align-middle">2 - 4 days</td>
                  <td className="align-middle">$26.50</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="local"
                        name="shipping-method"
                      />
                      <label className="custom-control-label" htmlFor="local"/>
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Local Shipping
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone), United States &amp; Canada
                  </span>
                  </td>
                  <td className="align-middle">up to one week</td>
                  <td className="align-middle">$10.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="flat"
                        name="shipping-method"
                      />
                      <label className="custom-control-label" htmlFor="flat"/>
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Flat Rate
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone)
                  </span>
                  </td>
                  <td className="align-middle">5 - 7 days</td>
                  <td className="align-middle">$33.85</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="ups"
                        name="shipping-method"
                      />
                      <label className="custom-control-label" htmlFor="ups"/>
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    UPS Ground Shipping
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone)
                  </span>
                  </td>
                  <td className="align-middle">4 - 6 days</td>
                  <td className="align-middle">$18.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="pickup"
                        name="shipping-method"
                      />
                      <label className="custom-control-label" htmlFor="pickup"/>
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Local Pickup from store
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone)
                  </span>
                  </td>
                  <td className="align-middle">—</td>
                  <td className="align-middle">$0.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="locker"
                        name="shipping-method"
                      />
                      <label className="custom-control-label" htmlFor="locker"/>
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Pick Up at Cartzilla Locker
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone), United States &amp; Canada
                  </span>
                  </td>
                  <td className="align-middle">—</td>
                  <td className="align-middle">$9.99</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="global-export"
                        name="shipping-method"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="global-export"
                      />
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Cartzilla Global Export
                  </span>
                    <br/>
                    <span className="text-muted font-size-sm">
                    All addresses (default zone), outside United States
                  </span>
                  </td>
                  <td className="align-middle">3 - 4 days</td>
                  <td className="align-middle">$25.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="same-day"
                        name="shipping-method"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="same-day"
                      />
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    Same-Day Delivery
                  </span>
                    <br/>
                    <span className="text-muted">Only United States</span>
                  </td>
                  <td className="align-middle">—</td>
                  <td className="align-middle">$34.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="custom-control custom-radio mb-4">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="international"
                        name="shipping-method"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="international"
                      />
                    </div>
                  </td>
                  <td className="align-middle">
                  <span className="text-dark font-weight-medium">
                    International Shipping
                  </span>
                    <br/>
                    <span className="text-muted">
                    All addresses (default zone)
                  </span>
                  </td>
                  <td className="align-middle">up to 15 days</td>
                  <td className="align-middle">$27.00</td>
                </tr>
                </tbody>
              </table>
            </div>
            {/* Navigation (desktop)*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pr-3">
                <Link
                  className="btn btn-secondary btn-block"
                  to="/your_details"
                >
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Adresses</span>
                  <span className="d-inline d-sm-none">Back</span>
                </Link>
              </div>
              <div className="w-50 pl-2">
                <Link
                  className="btn btn-primary btn-block"
                  to="/payments"
                >
                  <span className="d-none d-sm-inline">Proceed to Payment</span>
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
                      <a href="/">Women Colorblock
                        Sneakers</a>
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
                  <span className="d-none d-sm-inline">Back to Adresses</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 pl-2">
                <a
                  className="btn btn-primary btn-block"
                  href="/"
                >
                  <span className="d-none d-sm-inline">Proceed to Payment</span>
                  <span className="d-inline d-sm-none">Next</span>
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
