import React from 'react'

export const Error404 = () => {
  
  return (
    <div className="container py-5 mb-lg-3">
      <div className="row justify-content-center pt-lg-4 text-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <h1 className="display-404">404</h1>
          <h2 className="h3 mb-4">
            We can't seem to find the page you are looking for.
          </h2>
          <p className="font-size-md mb-4">
            <u>Here are some helpful links instead:</u>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="row">
            <div className="col-sm-4 mb-3">
              <a className="card h-100 border-0 box-shadow-sm"
                 href="/">
                <div className="card-body">
                  <div className="media align-items-center">
                    <i className="czi-home text-primary h4 mb-0"/>
                    <div className="media-body pl-3">
                      <h5 className="font-size-sm mb-0">Homepage</h5>
                      <span className="text-muted font-size-ms">
                    Return to homepage
                  </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-4 mb-3">
              <a className="card h-100 border-0 box-shadow-sm" href="/">
                <div className="card-body">
                  <div className="media align-items-center">
                    <i className="czi-search text-success h4 mb-0"/>
                    <div className="media-body pl-3">
                      <h5 className="font-size-sm mb-0">Search</h5>
                      <span className="text-muted font-size-ms">
                    Find with advanced search
                  </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-4 mb-3">
              <a
                className="card h-100 border-0 box-shadow-sm"
                href="/"
              >
                <div className="card-body">
                  <div className="media align-items-center">
                    <i className="czi-help text-info h4 mb-0"/>
                    <div className="media-body pl-3">
                      <h5 className="font-size-sm mb-0">Help &amp; Support</h5>
                      <span className="text-muted font-size-ms">
                    Visit our help center
                  </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
