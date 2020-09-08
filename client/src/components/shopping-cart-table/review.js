import React from 'react'
import cart1 from '../css/img/shop/cart/01.jpg'
import cart2 from '../css/img/shop/cart/02.jpg'
import cart3 from '../css/img/shop/cart/03.jpg'
import cart4 from '../css/img/shop/cart/04.jpg'
import {Link} from "react-router-dom";


export const Review = () => {
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
              <Link className="step-item active" to="/payments">
                <div className="step-progress">
                  <span className="step-count">4</span>
                </div>
                <div className="step-label">
                  <i className="czi-card"/>
                  Payment
                </div>
              </Link>
              <Link className="step-item active current" to="/review">
                <div className="step-progress">
                  <span className="step-count">5</span>
                </div>
                <div className="step-label">
                  <i className="czi-check-circle"/>
                  Review
                </div>
              </Link>
            </div>
            {/* Order details*/}
            <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Review your
              order</h2>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
              <div
                className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart1} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">Women Colorblock Sneakers</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>8.5
                  </div>
                  <div className="font-size-sm">
                    <span
                      className="text-muted mr-2">Color:</span>White &amp; Blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $154.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-right"
                style={{maxWidth: "9rem"}}
              >
                <p className="mb-0">
                  <span className="text-muted font-size-sm">Quantity:</span>
                  <span>&nbsp;1</span>
                </p>
                <button className="btn btn-link px-0" type="button">
                  <i className="czi-edit mr-2"/>
                  <span className="font-size-sm">Edit</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
              <div
                className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart2} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">TH Jeans City Backpack</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>Tommy
                    Hilfiger
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Khaki
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $79.<small>50</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-right"
                style={{maxWidth: "9rem"}}
              >
                <p className="mb-0">
                  <span className="text-muted font-size-sm">Quantity:</span>
                  <span>&nbsp;1</span>
                </p>
                <button className="btn btn-link px-0" type="button">
                  <i className="czi-edit mr-2"/>
                  <span className="font-size-sm">Edit</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
              <div
                className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart3} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">3-Color Sun Stash Hat</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>The North
                    Face
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Pink / Beige
                    /
                    Dark blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $22.<small>50</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-right"
                style={{maxWidth: "9rem"}}
              >
                <p className="mb-0">
                  <span className="text-muted font-size-sm">Quantity:</span>
                  <span>&nbsp;1</span>
                </p>
                <button className="btn btn-link px-0" type="button">
                  <i className="czi-edit mr-2"/>
                  <span className="font-size-sm">Edit</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
              <div
                className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart4} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">Cotton Polo Regular Fit</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>42
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Light blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $9.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-right"
                style={{maxWidth: "9rem"}}
              >
                <p className="mb-0">
                  <span className="text-muted font-size-sm">Quantity:</span>
                  <span>&nbsp;1</span>
                </p>
                <button className="btn btn-link px-0" type="button">
                  <i className="czi-edit mr-2"/>
                  <span className="font-size-sm">Edit</span>
                </button>
              </div>
            </div>
            {/* Client details*/}
            <div className="bg-secondary rounded-lg px-4 pt-4 pb-2">
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="h6">Shipping to:</h4>
                  <ul className="list-unstyled font-size-sm">
                    <li>
                      <span className="text-muted">Client:&nbsp;</span>Susan
                      Gardner
                    </li>
                    <li>
                      <span className="text-muted">Address:&nbsp;</span>44
                      Shirley
                      Ave. West Chicago, IL 60185, USA
                    </li>
                    <li>
                      <span className="text-muted">Phone:&nbsp;</span>+1 (808)
                      764
                      554 330
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h4 className="h6">Payment method:</h4>
                  <ul className="list-unstyled font-size-sm">
                    <li>
                      <span className="text-muted">Credit Card:&nbsp;</span>****
                      **** **** 5300
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Navigation (desktop)*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pr-3">
                <Link
                  className="btn btn-secondary btn-block"
                  to="/payments"
                >
                  <i className="czi-arrow-left mt-sm-0 mr-1"/>
                  <span className="d-none d-sm-inline">Back to Payment</span>
                  <span className="d-inline d-sm-none">Back</span>
                </Link>
              </div>
              <div className="w-50 pl-2">
                <Link
                  className="btn btn-primary btn-block"
                  to="/complete"
                >
                  <span className="d-none d-sm-inline">Complete order</span>
                  <span className="d-inline d-sm-none">Complete</span>
                  <i className="czi-arrow-right mt-sm-0 ml-1"/>
                </Link>
              </div>
            </div>
          </section>
          {/* Sidebar*/}
          <aside className="col-lg-4 pt-4 pt-lg-0">
            <div
              className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
              <h2 className="h6 text-center mb-4">Order summary</h2>
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
                  <span className="d-none d-sm-inline">Back to Payment</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 pl-2">
                <a
                  className="btn btn-primary btn-block"
                  href="/"
                >
                  <span className="d-none d-sm-inline">Complete order</span>
                  <span className="d-inline d-sm-none">Complete</span>
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
