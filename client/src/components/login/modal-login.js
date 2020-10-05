import React from 'react'


export const ModalLogin = () => {
  return (
    <div
      className="modal fade show"
      id="signin-modal"
      tabIndex={-1}
      role="dialog"
      style={{paddingRight: 17, display: "block"}}
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="nav nav-tabs card-header-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="czi-unlocked mr-2 mt-n1"/>
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="czi-user mr-2 mt-n1"/>
                  Sign up
                </a>
              </li>
            </ul>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body tab-content py-4">
  
            <form
              className="needs-validation tab-pane fade "
              autoComplete="off"
              noValidate
              id="signin-tab"
            >
              <div className="form-group">
                <label htmlFor="si-email">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  id="si-email"
                  placeholder="johndoe@example.com"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="si-password">Password</label>
                <div className="password-toggle">
                  <input
                    className="form-control"
                    type="password"
                    id="si-password"
                    required
                  />
                  <label className="password-toggle-btn">
                    <input className="custom-control-input" type="checkbox"/>
                    <i className="czi-eye password-toggle-indicator"/>
                    <span className="sr-only">Show password</span>
                  </label>
                </div>
              </div>
              <div
                className="form-group d-flex flex-wrap justify-content-between">
                <div className="custom-control custom-checkbox mb-2">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="si-remember"
                  />
                  <label className="custom-control-label" htmlFor="si-remember">
                    Remember me
                  </label>
                </div>
                <a className="font-size-sm" href="/">
                  Forgot password?
                </a>
              </div>
              <button
                className="btn btn-primary btn-block btn-shadow"
                type="submit"
              >
                Sign in
              </button>
            </form>
  
  
            <form
              className="needs-validation tab-pane fade show active"
              autoComplete="off"
              noValidate
              id="signup-tab"
            >
              <div className="form-group">
                <label htmlFor="su-name">Full name</label>
                <input
                  className="form-control"
                  type="text"
                  id="su-name"
                  placeholder="John Doe"
                  required
                />
                <div className="invalid-feedback">Please fill in your name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="su-email">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  id="su-email"
                  placeholder="johndoe@example.com"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="su-password">Password</label>
                <div className="password-toggle">
                  <input
                    className="form-control"
                    type="password"
                    id="su-password"
                    required
                  />
                  <label className="password-toggle-btn">
                    <input className="custom-control-input" type="checkbox"/>
                    <i className="czi-eye password-toggle-indicator"/>
                    <span className="sr-only">Show password</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="su-password-confirm">Confirm password</label>
                <div className="password-toggle">
                  <input
                    className="form-control"
                    type="password"
                    id="su-password-confirm"
                    required
                  />
                  <label className="password-toggle-btn">
                    <input className="custom-control-input" type="checkbox"/>
                    <i className="czi-eye password-toggle-indicator"/>
                    <span className="sr-only">Show password</span>
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-block btn-shadow"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
