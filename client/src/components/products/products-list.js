import React, {Component, useState} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import ReactPaginate from 'react-paginate'
import './products-list.css'
import {withProductStoreService} from '../hoc'
import ProductsListItem from '../products-list-item'
import {
  productAddedToCart,
  fetchProducts,
  sortProductPrice,
  reverseProductPrice,
  sortProductPAtoZ,
  reverseProductZtoA
} from "../../actions"
import {compose} from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'


export const ProductsList = ({
                               page, onAddedToCart, pageCount, handlePageClick,
                               countProduts, currentPage, sortingProducts
                             }) => {
  const [processor, setProcessor] = useState('collapse')
  
  const Processor = () => {
    if (processor === 'collapse show') {
      setProcessor('collapse')
    }
    if (processor === 'collapse') {
      setProcessor('collapse show')
    }
  }
  
  const [motherboard, setMotherboard] = useState('collapse')
  
  const Motherboard = () => {
    if (motherboard === 'collapse show') {
      setMotherboard('collapse')
    }
    if (motherboard === 'collapse') {
      setMotherboard('collapse show')
    }
  }
  
  const [memory, setMemory] = useState('collapse')
  
  const Memory = () => {
    if (memory === 'collapse show') {
      setMemory('collapse')
    }
    if (memory === 'collapse') {
      setMemory('collapse show')
    }
  }
  
  
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
                  <Link to="/store_list">Shop</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  List left sidebar
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Shop list left sidebar</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/* Sidebar*/}
          <aside className="col-lg-4">
            {/* Sidebar*/}
            <div className="cz-sidebar rounded-lg box-shadow-lg"
                 id="shop-sidebar">
              <div className="cz-sidebar-header box-shadow-sm">
                <button
                  className="close ml-auto"
                  type="button"
                  data-dismiss="sidebar"
                  aria-label="Close"
                >
              <span
                className="d-inline-block font-size-xs font-weight-normal align-middle">
                Close sidebar
              </span>
                  <span
                    className="d-inline-block align-middle ml-2"
                    aria-hidden="true"
                  >
                ×
              </span>
                </button>
              </div>
              <div className="cz-sidebar-body">
                {/* Categories*/}
                <div
                  className="widget widget-categories mb-4 pb-4 border-bottom">
                  <h3 className="widget-title">Categories</h3>
                  <div className="accordion mt-n1" id="shop-categories">
                    
                    {/* Processor*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a className="collapsed"
                             role="button"
                             data-toggle="collapse"
                             aria-expanded="true"
                             aria-controls="shoes"
                             onClick={Processor}
                          >
                            Processor
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className={processor}
                        id="shoes"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links cz-filter">
                            <div
                              className="input-group-overlay input-group-sm mb-2">
                              <input
                                className="cz-filter-search form-control form-control-sm appended-form-control"
                                type="text"
                                placeholder="Search"
                              />
                              <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search"/>
                            </span>
                              </div>
                            </div>
                            <ul
                              className="widget-list cz-filter-list pt-1"
                              style={{height: "100%"}}
                              data-simplebar=""
                              data-simplebar-auto-hide="false">
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                View all
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                1,953
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                AMD
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                247
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                Intel
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                156
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Motherboard*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a className="collapsed"
                             role="button"
                             data-toggle="collapse"
                             aria-expanded="true"
                             aria-controls="shoes"
                             onClick={Motherboard}
                          >
                            Motherboard
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className={motherboard}
                        id="shoes"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links cz-filter">
                            <div
                              className="input-group-overlay input-group-sm mb-2">
                              <input
                                className="cz-filter-search form-control form-control-sm appended-form-control"
                                type="text"
                                placeholder="Search"
                              />
                              <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search"/>
                            </span>
                              </div>
                            </div>
                            <ul
                              className="widget-list cz-filter-list pt-1"
                              style={{height: "100%"}}
                              data-simplebar=""
                              data-simplebar-auto-hide="false">
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                View all
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                1,953
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                AMD
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                247
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                Intel
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                156
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Computer Memory*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a className="collapsed"
                             role="button"
                             data-toggle="collapse"
                             aria-expanded="true"
                             aria-controls="shoes"
                             onClick={Memory}
                          >
                            Computer Memory
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className={memory}
                        id="shoes"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links cz-filter">
                            <div
                              className="input-group-overlay input-group-sm mb-2">
                              <input
                                className="cz-filter-search form-control form-control-sm appended-form-control"
                                type="text"
                                placeholder="Search"
                              />
                              <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search"/>
                            </span>
                              </div>
                            </div>
                            <ul
                              className="widget-list cz-filter-list pt-1"
                              style={{height: "100%"}}
                              data-simplebar=""
                              data-simplebar-auto-hide="false">
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                View all
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                1,953
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                AMD
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                247
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item cz-filter-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                              <span className="cz-filter-item-text">
                                Intel
                              </span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                156
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Card*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a
                            className="collapsed"
                            href="/"
                            role="button"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="sunglasses"
                          >
                            Video Card
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className="collapse"
                        id="sunglasses"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links">
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>View all</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                1,842
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Fashion Sunglasses</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                953
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Sport Sunglasses</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                589
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Classic Sunglasses</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                300
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Watches*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a className="collapsed"
                             href="/"
                             role="button"
                             data-toggle="collapse"
                             aria-expanded="false"
                             aria-controls="watches">
                            Watches
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className="collapse"
                        id="watches"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links">
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>View all</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                734
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Fashion Watches</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                572
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Casual Watches</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                110
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Luxury Watches</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                34
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Sport Watches</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                18
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accessories*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <a
                            className="collapsed"
                            href="/"
                            role="button"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="accessories"
                          >
                            Accessories
                            <span className="accordion-indicator"/>
                          </a>
                        </h3>
                      </div>
                      <div
                        className="collapse"
                        id="accessories"
                        data-parent="#shop-categories"
                      >
                        <div className="card-body">
                          <div className="widget widget-links">
                            <ul className="widget-list">
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>View all</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                920
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Belts</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                364
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Hats</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                405
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Jewelry</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                131
                              </span>
                                </a>
                              </li>
                              <li className="widget-list-item">
                                <a
                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                  href="/"
                                >
                                  <span>Cosmetics</span>
                                  <span
                                    className="font-size-xs text-muted ml-3">
                                20
                              </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Price range*/}
                <div className="widget mb-4 pb-4 border-bottom">
                  <h3 className="widget-title">Price</h3>
                  <div
                    className="cz-range-slider"
                    data-start-min={250}
                    data-start-max={680}
                    data-min={0}
                    data-max={1000}
                    data-step={1}
                  >
                    <div className="cz-range-slider-ui"/>
                    <div className="d-flex pb-1">
                      <div className="w-50 pr-2 mr-2">
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            className="form-control cz-range-slider-value-min"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-50 pl-2">
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            className="form-control cz-range-slider-value-max"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Filter by Brand*/}
                <div className="widget cz-filter mb-4 pb-4 border-bottom">
                  <h3 className="widget-title">Brand</h3>
                  <div className="input-group-overlay input-group-sm mb-2">
                    <input
                      className="cz-filter-search form-control form-control-sm appended-form-control"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="input-group-append-overlay">
                  <span className="input-group-text">
                    <i className="czi-search"/>
                  </span>
                    </div>
                  </div>
                  <ul
                    className="widget-list cz-filter-list list-unstyled pt-1"
                    style={{maxHeight: "12rem"}}
                    data-simplebar=""
                    data-simplebar-auto-hide="false"
                  >
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="adidas"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="adidas"
                        >
                          Adidas
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">425</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="ataylor"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="ataylor"
                        >
                          Ann Taylor
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">15</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="armani"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="armani"
                        >
                          Armani
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">18</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="banana"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="banana"
                        >
                          Banana Republic
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">103</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="bilabong"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="bilabong"
                        >
                          Bilabong
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">27</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="birkenstock"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="birkenstock"
                        >
                          Birkenstock
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">10</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="klein"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="klein"
                        >
                          Calvin Klein
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">365</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="columbia"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="columbia"
                        >
                          Columbia
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">508</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="converse"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="converse"
                        >
                          Converse
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">176</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="dockers"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="dockers"
                        >
                          Dockers
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">54</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="fruit"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="fruit"
                        >
                          Fruit of the Loom
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">739</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="hanes"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="hanes"
                        >
                          Hanes
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">92</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="choo"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="choo"
                        >
                          Jimmy Choo
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">17</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="levis"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="levis"
                        >
                          Levi's
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">361</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="lee"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="lee"
                        >
                          Lee
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">264</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="wearhouse"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="wearhouse"
                        >
                          Men's Wearhouse
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">75</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="newbalance"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="newbalance"
                        >
                          New Balance
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">218</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="nike"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="nike"
                        >
                          Nike
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">810</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="navy"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="navy"
                        >
                          Old Navy
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">147</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="polo"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="polo"
                        >
                          Polo Ralph Lauren
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">64</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="puma"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="puma"
                        >
                          Puma
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">370</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="reebok"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="reebok"
                        >
                          Reebok
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">506</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="skechers"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="skechers"
                        >
                          Skechers
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">209</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="hilfiger"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="hilfiger"
                        >
                          Tommy Hilfiger
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">487</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="armour"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="armour"
                        >
                          Under Armour
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">90</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="urban"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="urban"
                        >
                          Urban Outfitters
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">152</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="vsecret"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="vsecret"
                        >
                          Victoria's Secret
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">238</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="wolverine"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="wolverine"
                        >
                          Wolverine
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">29</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="wrangler"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="wrangler"
                        >
                          Wrangler
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">115</span>
                    </li>
                  </ul>
                </div>
                {/* Filter by Size*/}
                <div className="widget cz-filter mb-4 pb-4 border-bottom">
                  <h3 className="widget-title">Size</h3>
                  <div className="input-group-overlay input-group-sm mb-2">
                    <input
                      className="cz-filter-search form-control form-control-sm appended-form-control"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="input-group-append-overlay">
                  <span className="input-group-text">
                    <i className="czi-search"/>
                  </span>
                    </div>
                  </div>
                  <ul
                    className="widget-list cz-filter-list list-unstyled pt-1"
                    style={{maxHeight: "12rem"}}
                    data-simplebar=""
                    data-simplebar-auto-hide="false"
                  >
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-xs"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-xs"
                        >
                          XS
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">34</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-s"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-s"
                        >
                          S
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">57</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-m"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-m"
                        >
                          M
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">198</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-l"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-l"
                        >
                          L
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">72</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-xl"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-xl"
                        >
                          XL
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">46</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-39"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-39"
                        >
                          39
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">112</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-40"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-40"
                        >
                          40
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">85</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-41"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-40"
                        >
                          41
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">210</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-42"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-42"
                        >
                          42
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">57</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-43"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-43"
                        >
                          43
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">30</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-44"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-44"
                        >
                          44
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">61</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-45"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-45"
                        >
                          45
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">23</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-46"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-46"
                        >
                          46
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">19</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-47"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-47"
                        >
                          47
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">15</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-48"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-48"
                        >
                          48
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">12</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-49"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-49"
                        >
                          49
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">8</span>
                    </li>
                    <li
                      className="cz-filter-item d-flex justify-content-between align-items-center">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="size-50"
                        />
                        <label
                          className="custom-control-label cz-filter-item-text"
                          htmlFor="size-50"
                        >
                          50
                        </label>
                      </div>
                      <span className="font-size-xs text-muted">6</span>
                    </li>
                  </ul>
                </div>
                {/* Filter by Color*/}
                <div className="widget">
                  <h3 className="widget-title">Color</h3>
                  <div className="d-flex flex-wrap">
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-blue-gray"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-blue-gray"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#b3c8db"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-blue-gray"
                      >
                        Blue-gray
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-burgundy"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-burgundy"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#ca7295"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-burgundy"
                      >
                        Burgundy
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-teal"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-teal"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#91c2c3"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-teal"
                      >
                        Teal
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-brown"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-brown"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#9a8480"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-brown"
                      >
                        Brown
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-coral-red"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-coral-red"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#ff7072"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-coral-red"
                      >
                        Coral red
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-navy"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-navy"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#696dc8"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-navy"
                      >
                        Navy
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-charcoal"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-charcoal"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#4e4d4d"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-charcoal"
                      >
                        Charcoal
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option text-center mb-2 mx-1"
                      style={{width: "4rem"}}
                    >
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="color-sky-blue"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color-sky-blue"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: "#8bcdf5"}}
                    />
                      </label>
                      <label
                        className="d-block font-size-xs text-muted mt-n1"
                        htmlFor="color-sky-blue"
                      >
                        Sky blue
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* Content  */}
          <section className="col-lg-8">
            {/* Toolbar*/}
            <div
              className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
              <div className="d-flex flex-wrap">
                <div className="form-inline flex-nowrap mr-3 mr-sm-4 pb-3">
                  <label
                    className="text-light opacity-75 text-nowrap mr-2 d-none d-sm-block"
                    htmlFor="sorting"
                  >
                    Sort by:
                  </label>
                  <select className="form-control custom-select" id="sorting"
                          onChange={sortingProducts}>
                    <option value="popularity">Popularity</option>
                    <option value="low-high">Low - High Price</option>
                    <option value="high-low">High - Low Price</option>
                    <option value="average-rating">Average Rating</option>
                    <option value="az">A - Z Order</option>
                    <option value="za">Z - A Order</option>
                  </select>
                  <span
                    className="font-size-sm text-light opacity-75 text-nowrap ml-2 d-none d-md-block">
                of {countProduts} products
              </span>
                </div>
              </div>
              <div className="d-flex pb-3">
                <a className="nav-link-style nav-link-light mr-3" href="/">
                  <i className="czi-arrow-left"/>
                </a>
                <span
                  className="font-size-md text-light">{currentPage + 1} / {pageCount}</span>
                <a className="nav-link-style nav-link-light ml-3" href="/">
                  <i className="czi-arrow-right"/>
                </a>
              </div>
              <div className="d-none d-sm-flex pb-3">
                <Link
                  className="btn btn-icon nav-link-style nav-link-light mr-2"
                  to="/store"
                >
                  <i className="czi-view-grid"/>
                </Link>
                <Link
                  className="btn btn-icon nav-link-style bg-light text-dark disabled opacity-100"
                  to="/store_list"
                >
                  <i className="czi-view-list"/>
                </Link>
              </div>
            </div>
            {/* Products list*/}
            {/* Product*/}
            <ul className="book-list">
              {
                page.map((product) => {
                  return (
                    <li key={product._id}>
                      <ProductsListItem product={product}
                                        onAddedToCart={() => onAddedToCart(product._id)}/>
                    </li>
                  )
                })
              }
            </ul>
            {/* Pagination*/}
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-between pt-2 h"}
              activeClassName={"active"}
              marginPagesDisplayed={currentPage}
              pageRangeDisplayed={2}/>
          </section>
        </div>
      </div>
    </div>
  )
}

class ProductListContainer extends Component {
  
  
  state = {
    update: 0,
    offset: 0,
    perPage: 12,
    currentPage: 0
  }
  
  componentDidMount() {
    this.props.fetchProducts()
  }
  
  componentDidUpdate(prevState, prevProps) {
    if (!this.props === prevProps) {
      this.setState({sortingProducts: this.props.products})
    }
  }
  
  handlePageClick = (e) => {
    const selectedPage = e.selected
    console.log(selectedPage)
    const offset = selectedPage * this.state.perPage
    
    this.setState({
      offset: offset,
      currentPage: selectedPage
    })
    console.log('currentPage', this.state.currentPage)
    console.log('offset', this.state.offset)
    console.log('selectedPage', selectedPage)
  }
  
  sortingProducts = (e) => {
    if ('low-high' === e.target.value) {
      this.props.sortProductPrice()
      this.setState({update: 1})
    }
    if ('high-low' === e.target.value) {
      this.props.reverseProductPrice()
      this.setState({update: 1})
    }
    if ('az' === e.target.value) {
      this.props.sortProductPAtoZ()
      this.setState({update: 1})
    }
    if ('za' === e.target.value) {
      this.props.reverseProductZtoA()
      this.setState({update: 1})
    }
    if ('popularity' === e.target.value) {
      // this.setState({sortingProducts: this.props.products})
    }
    if ('average-rating' === e.target.value) {
    
    }
  }
  
  render() {
    
    const {currentPage} = this.state
    const {products, loading, error, onAddedToCart} = this.props
    const countProduts = products.length
    const page = products.slice(this.state.offset, this.state.offset + this.state.perPage)
    const pageCount = Math.ceil(products.length / this.state.perPage)
    
    if (loading) {
      return <Spinner/>
    }
    
    if (error) {
      return <ErrorIndicator/>
    }
    
    return <ProductsList page={page}
                         pageCount={pageCount}
                         handlePageClick={this.handlePageClick}
                         onAddedToCart={onAddedToCart}
                         countProduts={countProduts}
                         currentPage={currentPage}
                         sortingProducts={this.sortingProducts}
    />
  }
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
  return {products, loading, error}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchProducts: fetchProducts,
    onAddedToCart: productAddedToCart,
    sortProductPrice: sortProductPrice,
    reverseProductPrice: reverseProductPrice,
    sortProductPAtoZ: sortProductPAtoZ,
    reverseProductZtoA: reverseProductZtoA
  }, dispatch)
}

export default compose(
  withProductStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer)
