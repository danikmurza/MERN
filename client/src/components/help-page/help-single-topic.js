import React from 'react'
import helpArticle from '../css/img/pages/help-article.jpg'

const HelpSingleTopic = () => {
  return (
    <>
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
                  Single topic
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 mb-0">Single topic</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container py-5 mt-md-2 mb-2">
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
            <h2 className="h4 pb-3">Available payment methods when checkout</h2>
            <p className="font-size-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore.
            </p>
            <p className="font-size-md">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque
              ipsa quae ab illo inventore.
            </p>
            <div className="row pt-3 pb-4 mb-2 mb-md-4">
              <div className="col-md-7">
                <img
                  className="w-100 img-thumbnail"
                  src={helpArticle}
                  style={{maxWidth: 508}}
                  alt="Help"
                />
              </div>
              <div className="col-md-5 pt-4">
                <h3 className="h6">Pros of our payment options</h3>
                <ul className="list-unstyled font-size-sm pt-2">
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>Ut enim ad minima veniam, quis nostrum</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>At vero eos et accusamus et iusto odio</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>Nam libero tempore, cum soluta nobis</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>Et harum quidem rerum facilis est et expedita</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>Quis autem vel eum iure reprehenderit</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="czi-check text-success mr-2"/>
                    <span>Excepteur sint occaecat cupidatat non</span>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="h4 pb-3">Methods detail</h2>
            <div className="accordion" id="methods">
              <div className="card">
                <div className="card-header">
                  <h3 className="accordion-heading">
                    <a
                      href="/"
                      role="button"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="methodOne"
                    >
                      Credit / debit cards
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div
                  className="collapse show"
                  id="methodOne"
                  data-parent="#methods"
                >
                  <div className="card-body font-size-md">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate
                      non provident, similique sunt in culpa qui officia
                      deserunt
                      mollitia animi, id est laborum et dolorum fuga.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi
                      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="accordion-heading">
                    <a
                      className="collapsed"
                      href="/"
                      role="button"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="methodTwo"
                    >
                      Pay with PayPal
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div className="collapse" id="methodTwo" data-parent="#methods">
                  <div className="card-body font-size-md">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate
                      non provident, similique sunt in culpa qui officia
                      deserunt
                      mollitia animi, id est laborum et dolorum fuga.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi
                      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="accordion-heading">
                    <a
                      className="collapsed"
                      href="/"
                      role="button"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="methodThree"
                    >
                      Redeem reward points
                      <span className="accordion-indicator"/>
                    </a>
                  </h3>
                </div>
                <div className="collapse" id="methodThree"
                     data-parent="#methods">
                  <div className="card-body font-size-md">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui
                      blanditiis praesentium voluptatum deleniti atque corrupti
                      quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate
                      non provident, similique sunt in culpa qui officia
                      deserunt
                      mollitia animi, id est laborum et dolorum fuga.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi
                      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit request*/}
            <section className="container text-center pt-5 mt-2">
              <h2 className="h4 pb-3">Haven't found the answer? We can
                help.</h2>
              <i className="czi-help h3 text-primary d-block mb-4"/>
              <a className="btn btn-primary" href="/">
                Submit a request
              </a>
              <p className="font-size-sm pt-4">
                Contact us and we’ll get back to you as soon as possible.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </>
  )
}

export default HelpSingleTopic
