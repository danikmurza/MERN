import React from 'react'

const HelpTopics = () => {
  return (
    <>
      {/* Hero section with search*/}
      <section
        className="bg-dark bg-size-cover bg-position-center-x position-relative py-5 mb-5"
        style={{backgroundImage: "url(img/pages/help-hero-bg.jpg)"}}
      >
        <span className="bg-overlay bg-darker" style={{opacity: ".65"}}/>
        <div className="bg-overlay-content container py-4 my-3">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-light text-center">How can we help?</h1>
              <p className="pb-3 text-light text-center">
                Ask Questions. Browse Topics. Find Answers.
              </p>
              <div className="input-group-overlay input-group-lg mb-3">
                <div className="input-group-prepend-overlay">
              <span className="input-group-text">
                <i className="czi-search"/>
              </span>
                </div>
                <input
                  className="form-control prepended-form-control"
                  type="search"
                  placeholder="Ask your question..."
                />
              </div>
              <div className="font-size-sm">
                <span className="text-light opacity-50 mr-1">Suggestions:</span>
                <a
                  className="nav-link-style nav-link-light mr-1 pb-1 border-bottom border-light"
                  href="/"
                >
                  {" "}
                  Dashboard,
                </a>
                <a
                  className="nav-link-style nav-link-light mr-1 pb-1 border-bottom border-light"
                  href="/"
                >
                  Payment,
                </a>
                <a
                  className="nav-link-style nav-link-light mr-1 pb-1 border-bottom border-light"
                  href="/"
                >
                  {" "}
                  Refunds,
                </a>
                <a
                  className="nav-link-style nav-link-light mr-1 pb-1 border-bottom border-light"
                  href="/"
                >
                  {" "}
                  Delivery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Topics grid*/}
      <section className="container py-3">
        <h2 className="h3 text-center">Select a topic</h2>
        <div className="row pt-4">
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-user-circle h2 mt-2 mb-4 text-primary"/>
                <h6>Managing account</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-laptop h2 mt-2 mb-4 text-primary"/>
                <h6>Working with dashboard</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-card h2 mt-2 mb-4 text-primary"/>
                <h6>Payment options</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-delivery h2 mt-2 mb-4 text-primary"/>
                <h6>Delivery information</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-currency-exchange h2 mt-2 mb-4 text-primary"/>
                <h6>Refund policy</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-grid-gutter">
            <a className="card border-0 box-shadow"
               href="/">
              <div className="card-body text-center">
                <i className="czi-loudspeaker h2 mt-2 mb-4 text-primary"/>
                <h6>Affiliate program</h6>
                <p className="font-size-sm text-muted pb-2">
                  Proin nec turpis vel tortor venenatis tempus. Sed mollis vel
                  arcu
                  in tempor. Mauris enim purus, laoreet nec elit non euismod
                  tempur
                  accusantium.
                </p>
                <div className="btn btn-outline-primary btn-sm mb-2">
                  Learn more
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQ*/}
      <section className="container pt-4 pb-5">
        <h2 className="h3 text-center">F.A.Q.</h2>
        <div className="row pt-4">
          <div className="col-sm-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  How long will delivery take?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  What payment methods do you accept?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  Do you ship internationally?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  Do I need an account to place an order?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  How can I track my order?
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  What are the product refund conditions?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  Do you have discounts for returning customers?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  How do your referral program work?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  Where I can view and download invoices for my orders?
                </a>
              </li>
              <li className="d-flex align-items-center border-bottom pb-3 mb-3">
                <i className="czi-book text-muted mr-2"/>
                <a className="nav-link-style" href="/">
                  Do you provide technical support after the purchase?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Submit request*/}
      <section className="container text-center pt-1 pb-5 mb-2">
        <h2 className="h4 pb-3">Haven't found the answer? We can help.</h2>
        <i className="czi-help h3 text-primary d-block mb-4"/>
        <a className="btn btn-primary" href="/">
          Submit a request
        </a>
        <p className="font-size-sm pt-4">
          Contact us and we’ll get back to you as soon as possible.
        </p>
      </section>
      {/* Footer*/}
    </>
  )
}

export default HelpTopics
