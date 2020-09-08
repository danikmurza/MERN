import React, {Component} from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {productAddedToCart, fetchProducts} from "../../actions";
import {compose} from "../../utils";
import {withProductStoreService} from "../hoc";
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"


import offer from "../css/img/home/banners/offer.jpg"
import heroSlider4 from "../css/img/home/hero-slider/04.jpg"
import heroSlider5 from "../css/img/home/hero-slider/05.jpg"
import heroSlider6 from "../css/img/home/hero-slider/06.jpg"
import brands13 from "../css/img/shop/brands/13.png"
import brands14 from "../css/img/shop/brands/14.png"
import brands15 from "../css/img/shop/brands/15.png"
import brands16 from "../css/img/shop/brands/16.png"
import brands17 from "../css/img/shop/brands/17.png"
import brands18 from "../css/img/shop/brands/18.png"
import brands19 from "../css/img/shop/brands/19.png"
import brands20 from "../css/img/shop/brands/20.png"
import widget5 from "../css/img/shop/cart/widget/05.jpg"
import widget6 from "../css/img/shop/cart/widget/06.jpg"
import widget7 from "../css/img/shop/cart/widget/07.jpg"
import widget8 from "../css/img/shop/cart/widget/08.jpg"
import shopWidget6 from "../css/img/shop/widget/06.jpg"
import shopWidget7 from "../css/img/shop/widget/07.jpg"
import shopWidget8 from "../css/img/shop/widget/08.jpg"
import shopWidget9 from "../css/img/shop/widget/09.jpg"
import shopWidget10 from "../css/img/shop/widget/10.jpg"
import shopWidget11 from "../css/img/shop/widget/11.jpg"
import shopWidget12 from "../css/img/shop/widget/12.jpg"
import shopWidget13 from "../css/img/shop/widget/13.jpg"
import ytLogo from "../css/img/home/yt-logo.png"
import ytSubscribers from "../css/img/home/yt-subscribers.png"
import cover from "../css/img/home/video/cover01.jpg"
import cover2 from "../css/img/home/video/cover02.jpg"
import cover3 from "../css/img/home/video/cover03.jpg"
import cover4 from "../css/img/home/video/cover04.jpg"
import banner1 from "../css/img/home/banners/banner-sm01.png"
import banner2 from "../css/img/home/banners/banner-sm02.png"
import banner3 from "../css/img/home/banners/banner-sm03.png"
import catalog58 from "../css/img/shop/catalog/58.jpg"
import catalog59 from "../css/img/shop/catalog/59.jpg"
import catalog60 from "../css/img/shop/catalog/60.jpg"
import catalog61 from "../css/img/shop/catalog/61.jpg"
import catalog62 from "../css/img/shop/catalog/62.jpg"
import catalog63 from "../css/img/shop/catalog/63.jpg"
import catalog64 from "../css/img/shop/catalog/64.jpg"
import catalog65 from "../css/img/shop/catalog/65.jpg"


const Home = ({products, onAddedToCart}) => {
  
  return (
    <div>
      {/* Page Content*/}
      {/* Hero (Banners + Slider)*/}
      <section className="bg-secondary py-4 pt-md-5">
        <div className="container py-xl-2">
          <div className="row">
            {/* Slider     */}
            <div className="col-xl-9 pt-xl-4 order-xl-2">
              <div className="cz-carousel">
                <div
                  className="cz-carousel-inner"
                  // data-carousel-options={{"items": 1, "controls": false, "loop": false}}
                >
                  <div>
                    <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                        <img
                          className="d-block mx-auto"
                          src={heroSlider5}
                          alt="VR Collection"
                        />
                      </div>
                      <div
                        className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                        <h2 className="font-weight-light pb-1 from-bottom">
                          World of music with
                        </h2>
                        <h1
                          className="display-4 from-bottom delay-1">Headphones</h1>
                        <h5
                          className="font-weight-light pb-3 from-bottom delay-2">
                          Choose between top brands
                        </h5>
                        <a
                          className="btn btn-primary btn-shadow scale-up delay-4"
                          href="/"
                        >
                          Shop Now
                          <i className="czi-arrow-right ml-2 mr-n1"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                        <img
                          className="d-block mx-auto"
                          src={heroSlider4}
                          alt="VR Collection"
                        />
                      </div>
                      <div
                        className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                        <h2 className="font-weight-light pb-1 from-left">
                          Explore the best
                        </h2>
                        <h1 className="display-4 from-left delay-1">VR
                          Collection</h1>
                        <h5
                          className="font-weight-light pb-3 from-left delay-2">
                          on the market
                        </h5>
                        <a
                          className="btn btn-primary btn-shadow scale-up delay-4"
                          href="/"
                        >
                          Shop Now
                          <i className="czi-arrow-right ml-2 mr-n1"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                        <img
                          className="d-block mx-auto"
                          src={heroSlider6}
                          alt="VR Collection"
                        />
                      </div>
                      <div
                        className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                        <h2 className="font-weight-light pb-1 scale-up">
                          Check our huge
                        </h2>
                        <h1
                          className="display-4 scale-up delay-1">Smartphones</h1>
                        <h5 className="font-weight-light pb-3 scale-up delay-2">
                          &amp; Accessories collection
                        </h5>
                        <a
                          className="btn btn-primary btn-shadow scale-up delay-4"
                          href="/"
                        >
                          Shop Now
                          <i className="czi-arrow-right ml-2 mr-n1"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Banner group*/}
            <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
              <div className="table-responsive" data-simplebar="">
                <div className="d-flex d-xl-block">
                  <a
                    className="media w-100 align-items-center bg-faded-info rounded-lg pt-2 pl-2 mb-4 mr-4 mr-xl-0"
                    href="/"
                    style={{minWidth: "16rem"}}
                  >
                    <img
                      src={banner1}
                      width={125}
                      alt="Banner"
                    />
                    <div className="media-body py-4 px-2">
                      <h5 className="mb-2">
                        <span className="font-weight-light">Next Gen</span>
                        <br/>
                        Video <span className="font-weight-light">with</span>
                        <br/>
                        360 Cam
                      </h5>
                      <div className="text-info font-size-sm">
                        Shop now
                        <i className="czi-arrow-right font-size-xs ml-1"/>
                      </div>
                    </div>
                  </a>
                  <a
                    className="media w-100 align-items-center bg-faded-warning rounded-lg pt-2 pl-2 mb-4 mr-4 mr-xl-0"
                    href="/"
                    style={{minWidth: "16rem"}}
                  >
                    <img
                      src={banner2}
                      width={125}
                      alt="Banner"
                    />
                    <div className="media-body py-4 px-2">
                      <h5 className="mb-2">
                        <span className="font-weight-light">Top Rated</span>
                        <br/>
                        Gadgets
                        <br/>
                        <span className="font-weight-light">are on </span>Sale
                      </h5>
                      <div className="text-warning font-size-sm">
                        Shop now
                        <i className="czi-arrow-right font-size-xs ml-1"/>
                      </div>
                    </div>
                  </a>
                  <a
                    className="media w-100 align-items-center bg-faded-success rounded-lg pt-2 pl-2 mb-4"
                    href="/"
                    style={{minWidth: "16rem"}}
                  >
                    <img
                      src={banner3}
                      width={125}
                      alt="Banner"
                    />
                    <div className="media-body py-4 px-2">
                      <h5 className="mb-2">
                        <span className="font-weight-light">Catch Big</span>
                        <br/>
                        Deals <span className="font-weight-light">on</span>
                        <br/>
                        Earbuds
                      </h5>
                      <div className="text-success font-size-sm">
                        Shop now
                        <i className="czi-arrow-right font-size-xs ml-1"/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products grid (Trending products)*/}
      <section className="container pt-5">
        {/* Heading*/}
        <div
          className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
          <h2 className="h3 mb-0 pt-3 mr-2">Trending products</h2>
          <div className="pt-3">
            <a className="btn btn-outline-accent btn-sm" href="/">
              More products
              <i className="czi-arrow-right ml-1 mr-n1"/>
            </a>
          </div>
        </div>
        {/* Grid*/}
        <div className="row pt-2 mx-n2">
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog58} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Headphones
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Wireless Bluetooth Headphones</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $198.<small>00</small>
                </span>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <span className="badge badge-danger badge-shadow">Sale</span>
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog59} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Computers
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">AirPort Extreme Base Station</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $98.<small>50</small>
                </span>
                    <del className="font-size-sm text-muted">
                      $149.<small>99</small>
                    </del>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog60} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  TV, Video &amp; Audio
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Smart TV LED 49’’ Ultra HD</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                    <span
                      className="text-muted font-size-sm">Out of stock</span>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <a
                  className="btn btn-secondary btn-sm btn-block mb-2"
                  href="/"
                >
                  View details
                </a>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog61} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Smart Home
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Smart Speaker with Voice Control</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $49.<small>99</small>
                </span>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog62} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Wearable Electronics
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Fitness GPS Smart Watch</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $317.<small>40</small>
                </span>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog63} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Smartphones
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Popular Smartphone 128GB</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $965.<small>00</small>
                </span>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
              <span className="badge badge-info badge-shadow">New</span>
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog64} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Wearable Electronics
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Smart Watch Series 5, Aluminium</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $349.<small>99</small>
                </span>
                  </div>
                  <div className="star-rating">
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star-filled active"/>
                    <i className="sr-star czi-star"/>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
            <hr className="d-sm-none"/>
          </div>
          {/* Product*/}
          <div className="col-lg-3 col-md-4 col-sm-6 px-2">
            <div className="card product-card">
              <div className="product-card-actions d-flex align-items-center">
                <a className="btn-action nav-link-style mr-2" href="/">
                  <i className="czi-compare mr-1"/>
                  Compare
                </a>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to wishlist"
                >
                  <i className="czi-heart"/>
                </button>
              </div>
              <a
                className="card-img-top d-block overflow-hidden"
                href="/"
              >
                <img src={catalog65} alt="Product"/>
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block font-size-xs pb-1" href="/">
                  Computers
                </a>
                <h3 className="product-title font-size-sm">
                  <a href="/">Convertible 2-in-1 HD Laptop</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                <span className="text-accent">
                  $412.<small>00</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="card-body card-body-hidden">
                <button
                  className="btn btn-primary btn-sm btn-block mb-2"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1"/>
                  Add to Cart
                </button>
                <div className="text-center">
                  <a
                    className="nav-link-style font-size-ms"
                    href="/"
                    data-toggle="modal"
                  >
                    <i className="czi-eye align-middle mr-1"/>
                    Quick view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo banner*/}
      <section className="container mt-4 mb-grid-gutter">
        <div className="bg-faded-info rounded-lg py-4">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="px-4 pr-sm-0 pl-sm-5">
                <span className="badge badge-danger">Limited Offer</span>
                <h3 className="mt-4 mb-1 text-body font-weight-light">All
                  new</h3>
                <h2 className="mb-1">Last Gen iPad Pro</h2>
                <p className="h5 text-body font-weight-light">
                  at discounted price. Hurry up!
                </p>
                <div
                  className="cz-countdown py-2 h4"
                  data-countdown="07/01/2021 07:00:00 PM"
                >
                  <div className="cz-countdown-days">
                    <span className="cz-countdown-value"/>
                    <span className="cz-countdown-label text-muted">d</span>
                  </div>
                  <div className="cz-countdown-hours">
                    <span className="cz-countdown-value"/>
                    <span className="cz-countdown-label text-muted">h</span>
                  </div>
                  <div className="cz-countdown-minutes">
                    <span className="cz-countdown-value"/>
                    <span className="cz-countdown-label text-muted">m</span>
                  </div>
                  <div className="cz-countdown-seconds">
                    <span className="cz-countdown-value"/>
                    <span className="cz-countdown-label text-muted">s</span>
                  </div>
                </div>
                <a className="btn btn-accent" href="/">
                  View offers
                  <i className="czi-arrow-right font-size-ms ml-1"/>
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <img src={offer} alt="iPad Pro Offer"/>
            </div>
          </div>
        </div>
      </section>
      {/* Brands carousel*/}
      <section className="container mb-5">
        <div className="cz-carousel border-right">
          <div
            className="cz-carousel-inner"
            data-carousel-options='{ "nav": false, "controls": false, "autoplay": true, "autoplayTimeout": 4000, "loop": true, "responsive": {"0":{"items":1},"360":{"items":2},"600":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
          >
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands13}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands14}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands17}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands16}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands15}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands18}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands19}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
            <div>
              <a
                className="d-block bg-white border py-4 py-sm-5 px-2"
                href="/"
                style={{marginRight: "-.0625rem"}}
              >
                <img
                  className="d-block mx-auto"
                  src={brands20}
                  style={{width: 165}}
                  alt="Brand"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Product widgets*/}
      <section className="container pb-4 pb-md-5">
        <div className="row">
          {/* Bestsellers*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Bestsellers</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={widget5} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Wireless Bluetooth Headphones</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $259.<small>00</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={widget6} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Cloud Security Camera</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $122.<small>00</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={widget7} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Android Smartphone S10</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $799.<small>00</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={widget8} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Android Smart TV Box</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $67.<small>00</small>
                </span>
                    <del className="text-muted font-size-xs">
                      $90.<small>43</small>
                    </del>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="/">
                View more
                <i className="czi-arrow-right font-size-xs ml-1"/>
              </a>
            </div>
          </div>
          {/* New arrivals*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">New arrivals</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget6} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Monoblock Desktop PC</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $1,949.<small>00</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget7} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Laserjet Printer All-in-One</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $428.<small>60</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget8} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Console Controller Charger</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $14.<small>97</small>
                </span>
                    <del className="text-muted font-size-xs">
                      $16.<small>47</small>
                    </del>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget9} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">
                      Smart Watch Series 5, Aluminium
                    </a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $349.<small>99</small>
                </span>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="/">
                View more
                <i className="czi-arrow-right font-size-xs ml-1"/>
              </a>
            </div>
          </div>
          {/* Top rated*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Top rated</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget10} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Android Smartphone S9</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $749.<small>99</small>
                </span>
                    <del className="text-muted font-size-xs">
                      $859.<small>99</small>
                    </del>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget11} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Wireless Bluetooth Headphones</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $428.<small>60</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget12} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">360 Degrees Camera</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $98.<small>75</small>
                </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="/">
                  <img width={64} src={shopWidget13} alt="Product"/>
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="/">Digital Camera 40MP</a>
                  </h6>
                  <div className="widget-product-meta">
                <span className="text-accent">
                  $210.<small>00</small>
                </span>
                    <del className="text-muted font-size-xs">
                      $249.<small>00</small>
                    </del>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="/">
                View more
                <i className="czi-arrow-right font-size-xs ml-1"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* YouTube feed*/}
      <section className="container pb-5 mb-md-3">
        <div className="border rounded-lg p-3">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="bg-secondary p-5 text-center">
                <img
                  className="d-block mb-4 mx-auto"
                  src={ytLogo}
                  width={120}
                  alt="YouTube"
                />
                <div
                  className="media justify-content-center align-items-center mb-4">
                  <img
                    className="mr-2"
                    src={ytSubscribers}
                    width={126}
                    alt="YouTube Subscribers"
                  />
                  <span className="font-size-sm">250k+</span>
                </div>
                <a
                  className="btn btn-primary border-0 btn-sm mb-3"
                  href="/"
                  style={{backgroundColor: "#ff0000"}}
                >
                  <i className="czi-add-user mr-2"/>
                  Subscribe*
                </a>
                <p className="font-size-sm mb-0">
                  *View latest gadgets reviews available for purchase in our
                  store.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-2">
                <h2 className="h4 mb-3">Latest videos from Cartzilla
                  channel</h2>
                <a className="btn btn-outline-accent btn-sm mb-3" href="/">
                  More videos
                  <i className="czi-arrow-right font-size-xs ml-1 mr-n1"/>
                </a>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/vS93u75NnPo"
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:16</span>
                      <img
                        className="w-100"
                        src={cover}
                        alt="Video cover"
                      />
                    </div>
                    <h6 className="font-size-sm pt-1">
                      5 New Cool Gadgets You Must See on Cartzilla - Cheap
                      Budget
                    </h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/B6LaYgGogf0"
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">7:27</span>
                      <img
                        className="w-100"
                        src={cover2}
                        alt="Video cover"
                      />
                    </div>
                    <h6 className="font-size-sm pt-1">
                      5 Super Useful Gadgets on Cartzilla You Must Have in 2020
                    </h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/kB-ROfRS9V4"
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:20</span>
                      <img
                        className="w-100"
                        src={cover3}
                        alt="Video cover"
                      />
                    </div>
                    <h6 className="font-size-sm pt-1">
                      Top 5 New Amazing Gadgets on Cartzilla You Must See
                    </h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3 d-lg-none">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/sJK67XXE_Rg"
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:11</span>
                      <img
                        className="w-100"
                        src={cover4}
                        alt="Video cover"
                      />
                    </div>
                    <h6 className="font-size-sm font-weight-bold pt-1">
                      5 Amazing Construction Inventions and Working Tools
                      Available...
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog + Instagram info cards*/}
      <section className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-md-6">
            <a
              className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary"
              href="/"
            >
              <div className="card-body text-center">
                <i className="czi-edit h3 mt-2 mb-4 text-primary"/>
                <h3 className="h5 mb-1">Read the blog</h3>
                <p className="text-muted font-size-sm">
                  Latest store, fashion news and trends
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a
              className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
              href="/"
            >
              <div className="card-body text-center">
                <i className="czi-instagram h3 mt-2 mb-4 text-accent"/>
                <h3 className="h5 mb-1">Follow on Instagram</h3>
                <p className="text-muted font-size-sm">#ShopWithCartzilla</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Toast: Added to Cart*/}
      <div className="toast-container toast-bottom-center">
        <div
          className="toast mb-3"
          id="cart-toast"
          data-delay={5000}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success text-white">
            <i className="czi-check-circle mr-2"/>
            <h6 className="font-size-sm text-white mb-0 mr-auto">Added to
              cart!</h6>
            <button
              className="close text-white ml-2 mb-1"
              type="button"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">This item has been added to your cart.
          </div>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
}

class HomePage extends Component {
  
  componentDidMount() {
    this.props.fetchProducts()
  }
  
  render() {
    
    const {products, loading, error, onAddedToCart} = this.props
    
    
    if (loading) {
      return <Spinner/>
    }
    
    if (error) {
      return <ErrorIndicator/>
    }
    
    return (
      <Home products={products}
            onAddedToCart={onAddedToCart}
      />
    )
  }
}


const mapStateToProps = ({productList: {products, loading, error}}) => {
  return {products, loading, error}
};

const mapDispatchToProps = dispatch => {
  
  return bindActionCreators({
    fetchProducts: fetchProducts,
    onAddedToCart: productAddedToCart
  }, dispatch)
};

export default compose(
  withProductStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage)
