import React from 'react'
import LogoLight from "../css/img/footer-logo-light.png"
import usaFlag from "../css/img/flags/en.png"
import fr from "../css/img/flags/fr.png"
import de from "../css/img/flags/de.png"
import it from "../css/img/flags/it.png"
import paymentCard from "../css/img/cards-alt.png"


const Footer = () => {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        <div className="row pb-2">
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Shop departments</h3>
              <ul className="widget-list">
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Sneakers &amp; Athletic
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Athletic Apparel
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Sandals
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Jeans
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Shirts &amp; Tops
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Shorts
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    T-Shirts
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Swimwear
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Clogs &amp; Mules
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Bags &amp; Wallets
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Accessories
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Sunglasses &amp; Eyewear
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Watches
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">
                Account &amp; shipping info
              </h3>
              <ul className="widget-list">
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Your account
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Shipping rates &amp; policies
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Refunds &amp; replacements
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Order tracking
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Delivery info
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Taxes &amp; fees
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">About us</h3>
              <ul className="widget-list">
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    About company
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Our team
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    Careers
                  </a>
                </li>
                <li className="widget-list-item">
                  <a className="widget-list-link" href="/">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Stay informed</h3>
              <form
                className="cz-subscribe-form validate"
                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <div className="input-group input-group-overlay flex-nowrap">
                  <div className="input-group-prepend-overlay">
                  <span className="input-group-text text-muted font-size-base">
                    <i className="czi-mail"/>
                  </span>
                  </div>
                  <input
                    className="form-control prepended-form-control"
                    type="email"
                    name="EMAIL"
                    placeholder="Your email"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe*
                    </button>
                  </div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                  style={{position: "absolute", left: "-5000px"}}
                  aria-hidden="true"
                >
                  <input
                    className="cz-subscribe-form-antispam"
                    type="text"
                    name="b_c7103e2c981361a6639545bd5_29ca296126"
                    tabIndex={-1}
                  />
                </div>
                <small className="form-text text-light opacity-50">
                  *Subscribe to our newsletter to receive early discount offers,
                  updates and new products info.
                </small>
                <div className="subscribe-status"/>
              </form>
            </div>
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Download our app</h3>
              <div className="d-flex flex-wrap">
                <div className="mr-2 mb-2">
                  <a className="btn-market btn-apple" href="/" role="button">
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                </div>
                <div className="mb-2">
                  <a className="btn-market btn-google" href="/" role="button">
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 bg-darker">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="media">
                <i
                  className="czi-rocket text-primary"
                  style={{fontSize: "2.25rem"}}
                />
                <div className="media-body pl-3">
                  <h6 className="font-size-base text-light mb-1">
                    Fast and free delivery
                  </h6>
                  <p className="mb-0 font-size-ms text-light opacity-50">
                    Free delivery for all orders over $200
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="media">
                <i
                  className="czi-currency-exchange text-primary"
                  style={{fontSize: "2.25rem"}}
                />
                <div className="media-body pl-3">
                  <h6 className="font-size-base text-light mb-1">
                    Money back guarantee
                  </h6>
                  <p className="mb-0 font-size-ms text-light opacity-50">
                    We return money within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="media">
                <i
                  className="czi-support text-primary"
                  style={{fontSize: "2.25rem"}}
                />
                <div className="media-body pl-3">
                  <h6 className="font-size-base text-light mb-1">
                    24/7 customer support
                  </h6>
                  <p className="mb-0 font-size-ms text-light opacity-50">
                    Friendly 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="media">
                <i
                  className="czi-card text-primary"
                  style={{fontSize: "2.25rem"}}
                />
                <div className="media-body pl-3">
                  <h6 className="font-size-base text-light mb-1">
                    Secure online payment
                  </h6>
                  <p className="mb-0 font-size-ms text-light opacity-50">
                    We possess SSL / Secure сertificate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-light pb-4 mb-3"/>
          <div className="row pb-2">
            <div className="col-md-6 text-center text-md-left mb-4">
              <div className="text-nowrap mb-4">
                <a className="d-inline-block align-middle mt-n1 mr-3" href="/">
                  <img
                    className="d-block"
                    width={117}
                    src={LogoLight}
                    alt="Cartzilla"
                  />
                </a>
                <div className="btn-group dropdown disable-autohide">
                  <button
                    className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2"
                    type="button"
                    data-toggle="dropdown"
                  >
                    <img
                      className="mr-2"
                      width={20}
                      src={usaFlag}
                      alt="English"
                    />
                    Eng / $
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <select className="custom-select custom-select-sm">
                        <option value="usd">$ USD</option>
                        <option value="eur">€ EUR</option>
                        <option value="ukp">£ UKP</option>
                        <option value="jpy">¥ JPY</option>
                      </select>
                    </li>
                    <li>
                      <a className="dropdown-item pb-1" href="/">
                        <img
                          className="mr-2"
                          width={20}
                          src={fr}
                          alt="Français"
                        />
                        Français
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item pb-1" href="/">
                        <img
                          className="mr-2"
                          width={20}
                          src={de}
                          alt="Deutsch"
                        />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <img
                          className="mr-2"
                          width={20}
                          src={it}
                          alt="Italiano"
                        />
                        Italiano
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-links widget-light">
                <ul
                  className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                  <li className="widget-list-item mr-4">
                    <a className="widget-list-link" href="/">
                      Outlets
                    </a>
                  </li>
                  <li className="widget-list-item mr-4">
                    <a className="widget-list-link" href="/">
                      Affiliates
                    </a>
                  </li>
                  <li className="widget-list-item mr-4">
                    <a className="widget-list-link" href="/">
                      Support
                    </a>
                  </li>
                  <li className="widget-list-item mr-4">
                    <a className="widget-list-link" href="/">
                      Privacy
                    </a>
                  </li>
                  <li className="widget-list-item mr-4">
                    <a className="widget-list-link" href="/">
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-right mb-4">
              <div className="mb-3">
                <a className="social-btn sb-light sb-twitter ml-2 mb-2"
                   href="/">
                  <i className="czi-twitter"/>
                </a>
                <a className="social-btn sb-light sb-facebook ml-2 mb-2"
                   href="/">
                  <i className="czi-facebook"/>
                </a>
                <a
                  className="social-btn sb-light sb-instagram ml-2 mb-2"
                  href="/"
                >
                  <i className="czi-instagram"/>
                </a>
                <a
                  className="social-btn sb-light sb-pinterest ml-2 mb-2"
                  href="/"
                >
                  <i className="czi-pinterest"/>
                </a>
                <a className="social-btn sb-light sb-youtube ml-2 mb-2"
                   href="/">
                  <i className="czi-youtube"/>
                </a>
              </div>
              <img
                className="d-inline-block"
                width={187}
                src={paymentCard}
                alt="Payment methods"
              />
            </div>
          </div>
          <div
            className="pb-4 font-size-xs text-light opacity-50 text-center text-md-left">
            © All rights reserved. Made by{" "}
            <a
              className="text-light"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Createx Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default  Footer
