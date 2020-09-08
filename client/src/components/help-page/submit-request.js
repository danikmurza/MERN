import React from 'react'

export const SubmitRequest = () => {
  return (
    <div>
      {/* Page Title (Light)*/}
      <div className="bg-secondary py-4">
        <div
          className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="/">
                    <i className="czi-home"/>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="/">Help center</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Submit request
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 mb-0">Submit a request</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container py-5 mt-md-2 mb-md-4">
        <div className="row">
          <div className="col-lg-3">
            {/* Related articles sidebar*/}
            <div className="cz-sidebar border-right" id="help-sidebar">
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
              <div
                className="cz-sidebar-body py-lg-1 pl-lg-0"
                data-simplebar=""
                data-simplebar-auto-hide="true"
              >
                {/* Links*/}
                <div className="widget widget-links">
                  <h3 className="widget-title">Related articles</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Managing account
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Working with dashboard
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Available payment methods
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Delivery information
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Order tracking instructions
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Refund policy
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Offers and discounts
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Reward points
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Affiliate program
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        After purchase support
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Service terms &amp; conditions
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="/">
                        <i
                          className="czi-book text-muted align-middle mt-n1 mr-1"/>
                        Most popular questions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div
              className="alert alert-info alert-with-icon font-size-sm mb-4"
              role="alert"
            >
              <div className="alert-icon-box">
                <i className="alert-icon czi-announcement"/>
              </div>
              Our friendly Support team is always here to help you. Begin by
              selecting a topic we can help you with.
            </div>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-topic">
                      Select a topic <strong className="text-danger">*</strong>
                    </label>
                    <select
                      className="form-control custom-select"
                      required
                      id="help-topic"
                    >
                      <option value>—</option>
                      <option value="Managing Account">Managing Account</option>
                      <option value="Working with Dashboard">
                        Working with Dashboard
                      </option>
                      <option value="Payment Methods">Payment Methods</option>
                      <option value="Delivery Information">
                        Delivery Information
                      </option>
                      <option value="Refund Policy">Refund Policy</option>
                      <option value="Affiliate Program">Affiliate Program
                      </option>
                    </select>
                    <div className="invalid-feedback">Please choose a topic!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-subject">Request Subject </label>
                    <input className="form-control" type="text"
                           id="help-subject"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="help-message">
                  Request Message <strong className="text-danger">*</strong>
                </label>
                <textarea
                  className="form-control"
                  rows={6}
                  required
                  id="help-message"
                  defaultValue={""}
                />
                <div className="invalid-feedback">
                  Please provide a detailed description of your problem!
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-name">
                      Your Name <strong className="text-danger">*</strong>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="help-name"
                    />
                    <div className="invalid-feedback">Please enter your name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-email">
                      Your Email <strong className="text-danger">*</strong>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      id="help-email"
                    />
                    <div className="invalid-feedback">
                      Please enter valid email address!
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-url">Include a relevant URL</label>
                    <input className="form-control" type="text" id="help-url"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="help-file">Attachments</label>
                    <div className="custom-file">
                      <input
                        className="custom-file-input"
                        type="file"
                        id="help-file"
                      />
                      <label className="custom-file-label" htmlFor="help-file">
                        Choose file...
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary mr-4" type="submit">
                Submit a request
              </button>
              <a
                className="nav-link-style d-inline-block align-middle font-size-sm py-2"
                href="/"
              >
                Privacy policy
              </a>
            </form>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
}
