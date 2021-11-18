import React, {Component} from "react"
import ProductsListItem from "./products-list-item"
import ProductsGridItem from "./products-grid-item"
import withStyles from "@material-ui/core/styles/withStyles"
import {Slider} from "@material-ui/core"
import {Link} from "react-router-dom"
import ReactPaginate from 'react-paginate'
import {Accordion, Card, Button} from 'react-bootstrap'
import './products-list.css'


export class ProductList extends Component {
  
  state = {
    valuePrice: [0, 1000],
    list: false,
    buttonGrid: "btn btn-icon nav-link-style bg-light text-dark disabled opacity-100",
    buttonList: "btn btn-icon nav-link-style nav-link-light"
  }
  
  handleChange = (event, newValue) => {
    this.setState({valuePrice: newValue})
  }
  
  
  render() {
    const {
      page, sortingProducts,
      pageCount, currentPage, handlePageClick, countProduts
    } = this.props
    
    const {list, buttonGrid, buttonList} = this.state

    return (
      <>
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
                    <Link to="/store">Shop</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Grid left sidebar
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
              <h1 className="h3 text-light mb-0">Shop grid left sidebar</h1>
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
                      aria-hidden="true">×</span>
                  </button>
                </div>
                
                <div className="cz-sidebar-body">
                  {/* Categories*/}
                  <Accordion
                    className="widget widget-categories mb-4 pb-4 border-bottom">
                    <h3 className="widget-title">Categories</h3>
                    <div className="accordion mt-n1" id="shop-categories">
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="0" className="p-0 m-0">
                              Processor
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="1" className="p-0 m-0">
                              Motherboard
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="2" className="p-0 m-0">
                              Memory
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="3" className="p-0 m-0">
                              Video Cards
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="4" className="p-0 m-0">
                              Drive & Storage
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="5" className="p-0 m-0">
                              Cases & Accessories
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="6" className="p-0 m-0">
                              Air & Water Cooling
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="7" className="p-0 m-0">
                              Expansion Cards
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="8" className="p-0 m-0">
                              Streaming Setup
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="8">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="9" className="p-0 m-0">
                              Monitors
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="9">
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
                        </Accordion.Collapse>
                      </Card>
                      <Card className="card pb-2">
                        <Card.Header className="card-header">
                          <h3 className="accordion-heading">
                            <Accordion.Toggle as={Button} variant="link"
                                              eventKey="10" className="p-0 m-0">
                              Networking
                              <span className="accordion-indicator"/>
                            </Accordion.Toggle>
                          </h3>
                        </Card.Header>
                        <Accordion.Collapse eventKey="10">
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
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Accordion>
                  
                  {/* Price range*/}
                  <div className="widget mb-4 pb-4 border-bottom">
                    <h3 className="widget-title">Price</h3>
                    {/*<RangeSlider/>*/}
                    <RangeSlider value1={this.state.valuePrice}
                                 handleChange={this.handleChange}/>
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
                      data-simplebar-auto-hide="false">
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
                            Asus
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
                            Gigabyte
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
                            MSI
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
                            Assrock
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
                            id="corsair"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="corsair"
                          >
                            Corsair
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
                            id="seagate"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="seagate"
                          >
                            Seagate
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
                            id="Crucial"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="Crucial"
                          >
                            Crucial
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
                            id="Logitech"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="Logitech"
                          >
                            Logitech
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
                            id="wd"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="wd"
                          >
                            WD
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
                            id="samsung"
                          />
                          <label
                            className="custom-control-label cz-filter-item-text"
                            htmlFor="samsung"
                          >
                            Samsung
                          </label>
                        </div>
                        <span className="font-size-xs text-muted">54</span>
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
                      data-simplebar-auto-hide="false">
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
                    </ul>
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
                      htmlFor="sorting">
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
                  <button
                    className={list ? buttonList : buttonGrid}
                    onClick={() => this.setState({list: false})}
                  >
                    <i className="czi-view-grid"/>
                  </button>
                  <button
                    className={list ? buttonGrid : buttonList}
                    onClick={() => this.setState({list: true})}
                  >
                    <i className="czi-view-list"/>
                  </button>
                </div>
              </div>
              {/* Products grid*/}
              {list ?
                <ul
                  className="book-list">
                  {
                    page.map((product) => {
                      return (
                        <li key={product._id}>
                          <ProductsListItem product={product}
                                            productDescription={this.props.productDescription}
                          />
                        </li>
                      )
                    })
                  }
                </ul> :
                <ul style={{listStyle: 'none'}} className="p-0 m-0">
                  <div className="row mx-n2">
                    {
                      page.map((product) => {
                        return (
                          <li key={product._id}
                              className="col-md-4 col-sm-6 px-2 mb-4">
                            <ProductsGridItem product={product}
                                              productDescription={this.props.productDescription}
                            
                            />
                          </li>
                        )
                      })
                    }
                  </div>
                </ul>
              }
              {/* Products grid*/}
              <hr className="my-3"/>
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
      </>
    )
  }
  
}

const RangeSlider = ({value1, handleChange}) => {
  const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"
  const IOSSlider = withStyles({
    root: {
      color: "#fe696a",
      height: 2,
      padding: "15px 0"
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: "#fff",
      boxShadow: iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      "&:focus, &:hover, &$active": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: iOSBoxShadow
        }
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 12px)",
      top: -22,
      "& *": {
        background: "transparent",
        color: "#000"
      }
    },
    track: {
      height: 3
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: "#bfbfbf"
    },
    mark: {
      backgroundColor: "#bfbfbf",
      height: 8,
      width: 1,
      marginTop: -3
    },
    markActive: {
      opacity: 1,
      backgroundColor: "currentColor"
    }
  })(Slider)
  const marks = [
    {
      value: 0
    },
    {
      value: 1000
    }
  ]
  
  return (
    <div>
      <IOSSlider
        defaultValue={value1}
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleChange}
        max={1000}
      />
      <div
        className="cz-range-slider">
        <div className="d-flex pb-1">
          <div className="w-50 pr-2 mr-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                className="form-control cz-range-slider-value-min"
                type="text"
                value={value1[0]}
                onChange={handleChange}
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
                value={value1[1]}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
