import React from 'react'

export const OrderTracking = () => {
  return (
    <div>
      <div className="bg-dark py-4">
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
                  Order tracking
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">
              Tracking order:{" "}
              <span
                className="h4 font-weight-normal text-light">34VB5540K83</span>
            </h1>
          </div>
        </div>
      </div>
      
      
      <div className="container py-5 mb-2 mb-md-3">
        {/* Details*/}
        <div className="row mb-4">
          <div className="col-sm-4 mb-2">
            <div className="bg-secondary p-4 text-center rounded-lg">
              <span
                className="font-weight-medium text-dark mr-2">Shipped via:</span>
              UPS Ground
            </div>
          </div>
          <div className="col-sm-4 mb-2">
            <div className="bg-secondary p-4 text-center rounded-lg">
              <span className="font-weight-medium text-dark mr-2">Status:</span>
              Processing order
            </div>
          </div>
          <div className="col-sm-4 mb-2">
            <div className="bg-secondary p-4 text-center rounded-lg">
        <span className="font-weight-medium text-dark mr-2">
          Expected date:
        </span>
              October 15, 2019
            </div>
          </div>
        </div>
        {/* Progress*/}
        <div className="card border-0 box-shadow-lg">
          <div className="card-body pb-2">
            <ul className="nav nav-tabs media-tabs nav-justified">
              <li className="nav-item">
                <div className="nav-link completed">
                  <div className="media align-items-center">
                    <div className="media-tab-media mr-3">
                      <i className="czi-bag"/>
                    </div>
                    <div className="media-body">
                      <div
                        className="media-tab-subtitle text-muted font-size-xs mb-1">
                        First step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Order placed
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active">
                  <div className="media align-items-center">
                    <div className="media-tab-media mr-3">
                      <i className="czi-settings"/>
                    </div>
                    <div className="media-body">
                      <div
                        className="media-tab-subtitle text-muted font-size-xs mb-1">
                        Second step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Processing order
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div className="media align-items-center">
                    <div className="media-tab-media mr-3">
                      <i className="czi-star"/>
                    </div>
                    <div className="media-body">
                      <div
                        className="media-tab-subtitle text-muted font-size-xs mb-1">
                        Third step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Quality check
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div className="media align-items-center">
                    <div className="media-tab-media mr-3">
                      <i className="czi-package"/>
                    </div>
                    <div className="media-body">
                      <div
                        className="media-tab-subtitle text-muted font-size-xs mb-1">
                        Fourth step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Product dispatched
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer*/}
        <div
          className="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div className="custom-control custom-checkbox mt-2 mr-3">
            <input
              className="custom-control-input"
              type="checkbox"
              id="notify-me"
              defaultChecked
            />
            <label className="custom-control-label" htmlFor="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          <a
            className="btn btn-primary btn-sm mt-2"
            href="/"
            data-toggle="modal"
          >
            View Order Details
          </a>
        </div>
      </div>
    </div>
  )
}
