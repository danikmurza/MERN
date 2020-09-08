import React from 'react'

import orlando from "../css/img/contacts/orlando.jpg"
import chicago from "../css/img/contacts/chicago.jpg"
import newYork from "../css/img/contacts/newyork.jpg"

export const Contacts = () => {
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
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Contacts
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 mb-0">Contacts</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      {/* Contact detail cards*/}
      <section className="container-fluid pt-grid-gutter">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-grid-gutter">
            <a className="card" href="/" data-scroll="">
              <div className="card-body text-center">
                <i className="czi-location h3 mt-2 mb-4 text-primary"/>
                <h3 className="h6 mb-2">Main store address</h3>
                <p className="font-size-sm text-muted">
                  396 Lillian Blvd, Holbrook, NY 11741, USA
                </p>
                <div className="font-size-sm text-primary">
                  Click to see map
                  <i className="czi-arrow-right align-middle ml-1"/>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-md-6 mb-grid-gutter">
            <div className="card">
              <div className="card-body text-center">
                <i className="czi-time h3 mt-2 mb-4 text-primary"/>
                <h3 className="h6 mb-3">Working hours</h3>
                <ul className="list-unstyled font-size-sm text-muted mb-0">
                  <li>Mon - Fri: 10AM - 7PM</li>
                  <li className="mb-0">Sta: 11AM - 5PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-grid-gutter">
            <div className="card">
              <div className="card-body text-center">
                <i className="czi-phone h3 mt-2 mb-4 text-primary"/>
                <h3 className="h6 mb-3">Phone numbers</h3>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li>
                    <span className="text-muted mr-1">For customers:</span>
                    <a className="nav-link-style" href="tel:+108044357260">
                      +1 (080) 44 357 260
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted mr-1">Tech support:</span>
                    <a className="nav-link-style" href="tel:+100331697720">
                      +1 00 33 169 7720
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-grid-gutter">
            <div className="card">
              <div className="card-body text-center">
                <i className="czi-mail h3 mt-2 mb-4 text-primary"/>
                <h3 className="h6 mb-3">Email addresses</h3>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li>
                    <span className="text-muted mr-1">For customers:</span>
                    <a className="nav-link-style" href="mailto:+108044357260">
                      customer@example.com
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted mr-1">Tech support:</span>
                    <a className="nav-link-style"
                       href="mailto:support@example.com">
                      support@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Outlet stores*/}
      <section className="container pt-4 mt-md-4 mb-5">
        <h2 className="h3 text-center mb-3">Partner outlet stores</h2>
        <div className="row pt-4">
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="card border-0 box-shadow">
              <img
                className="card-img-top"
                src={orlando}
                alt="Orlando"
              />
              <div className="card-body">
                <h6>Orlando, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="media pb-3 border-bottom">
                    <i
                      className="czi-location font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Find us</span>
                      <a className="d-block text-heading font-size-sm" href="/">
                        514 S. Magnolia St. Orlando, FL 32806, USA
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2 pb-3 border-bottom">
                    <i
                      className="czi-phone font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="tel:+178632256040"
                      >
                        +1 (786) 322 560 40
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2">
                    <i
                      className="czi-mail font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="mailto:orlando@example.com"
                      >
                        orlando@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="card border-0 box-shadow">
              <img
                className="card-img-top"
                src={chicago}
                alt="Chicago"
              />
              <div className="card-body">
                <h6>Chicago, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="media pb-3 border-bottom">
                    <i
                      className="czi-location font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Find us</span>
                      <a className="d-block text-heading font-size-sm" href="/">
                        769, Industrial, West Chicago, IL 60185, USA
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2 pb-3 border-bottom">
                    <i
                      className="czi-phone font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="tel:+184725276533"
                      >
                        +1 (847) 252 765 33
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2">
                    <i
                      className="czi-mail font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="mailto:chicago@example.com"
                      >
                        chicago@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <div className="card border-0 box-shadow">
              <img
                className="card-img-top"
                src={newYork}
                alt="New York"
              />
              <div className="card-body">
                <h6>New York, USA</h6>
                <ul className="list-unstyled mb-0">
                  <li className="media pb-3 border-bottom">
                    <i
                      className="czi-location font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Find us</span>
                      <a className="d-block text-heading font-size-sm" href="/">
                        396 Lillian Blvd, Holbrook, NY 11741, USA
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2 pb-3 border-bottom">
                    <i
                      className="czi-phone font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Call us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="tel:+1212477690000"
                      >
                        +1 (212) 477 690 000
                      </a>
                    </div>
                  </li>
                  <li className="media pt-2">
                    <i
                      className="czi-mail font-size-lg mt-2 mb-0 text-primary"/>
                    <div className="media-body pl-3">
                      <span className="font-size-ms text-muted">Write us</span>
                      <a
                        className="d-block text-heading font-size-sm"
                        href="mailto:newyork@example.com"
                      >
                        newyork@example.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Split section: Map + Contact form*/}
      <div className="container-fluid px-0" id="map">
        <div className="row no-gutters">
          <div className="col-lg-6 iframe-full-height-wrap">
            <iframe
              title="maps"
              className="iframe-full-height"
              width={600}
              height={250}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53357.14257194912!2d-73.07268695801845!3d40.78017062807504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396+Lillian+Blvd%2C+Holbrook%2C+NY+11741%2C+USA!5e0!3m2!1sen!2sua!4v1558703206875!5m2!1sen!2sua"
            />
          </div>
          <div className="col-lg-6 px-4 px-xl-5 py-5 border-top">
            <h2 className="h4 mb-4">Drop us a line</h2>
            <form className="needs-validation mb-3" noValidate>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="cf-name">
                      Your name:&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="cf-name"
                      placeholder="John Doe"
                      required
                    />
                    <div className="invalid-feedback">Please fill in you name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="cf-email">
                      Email address:&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="cf-email"
                      placeholder="johndoe@email.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide valid email address!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="cf-phone">
                      Your phone:&nbsp;<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="cf-phone"
                      placeholder="+1 (212) 00 000 000"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide valid phone number!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="cf-subject">Subject:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="cf-subject"
                      placeholder="Provide short title of your request"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">
                  Message:&nbsp;<span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="cf-message"
                  rows={6}
                  placeholder="Please describe in detail your request"
                  required
                  defaultValue={""}
                />
                <div className="invalid-feedback">Please write a message!</div>
              </div>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
}
