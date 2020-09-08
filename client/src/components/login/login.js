import React from 'react'
import {connect} from 'react-redux'
import {userAction} from '../../actions'
import {Link} from "react-router-dom"
import {Button, Modal} from "react-bootstrap";


class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: Number,
      show: false
    }
  }
  
  firstName = (e) => {
    e.preventDefault()
    this.setState({firstName: e.target.value})
  }
  lastName = (e) => {
    e.preventDefault()
    this.setState({lastName: e.target.value})
  }
  phoneNumber = (e) => {
    e.preventDefault()
    this.setState({phoneNumber: e.target.value})
  }
  emailReg = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }
  passwordReg = (e) => {
    e.preventDefault()
    this.setState({password: e.target.value})
  }
  emailPost = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }
  passwordPost = (e) => {
    e.preventDefault()
    this.setState({password: e.target.value})
  }
  
  logIn = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    const {dispatch} = this.props
    if (email && password) {
      dispatch(userAction.login(email, password))
      this.props.history.push('/')
    }
  }
  
  
  onSubmits = (e) => {
    e.preventDefault()
    if (this.state.email && this.state.password) {
      this.props.dispatch(userAction.register(this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName,
        this.state.phoneNumber
      ))
      this.setState({show: true})
    }
  }
  
  handleClose = () => {
    this.setState({show: false})
  }
  
  
  render() {
    const {show} = this.state
    return (
      
      <div className="container py-4 py-lg-5 my-4">
        
        <Modal className="modal" show={show}>
          <Modal.Header closeButton>
            <Modal.Title>My Account</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <h3 className="text-center">User created</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        
        
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 box-shadow">
              <div className="card-body">
                <h2 className="h4 mb-1">Sign in</h2>
                <div className="py-3">
                  <h3
                    className="d-inline-block align-middle font-size-base font-weight-semibold mb-2 mr-2">
                    With social account:
                  </h3>
                  <div className="d-inline-block align-middle">
                    <a className="social-btn sb-google mr-2 mb-2"
                       href="/"
                       data-toggle="tooltip"
                       title="true"
                       data-original-title="Sign in with Google"
                    >
                      <i className="czi-google"/>
                    </a>
                    <a
                      className="social-btn sb-facebook mr-2 mb-2"
                      href="/"
                      data-toggle="tooltip"
                      title="true"
                      data-original-title="Sign in with Facebook"
                    >
                      <i className="czi-facebook"/>
                    </a>
                    <a
                      className="social-btn sb-twitter mr-2 mb-2"
                      href="/"
                      data-toggle="tooltip"
                      title="true"
                      data-original-title="Sign in with Twitter"
                    >
                      <i className="czi-twitter"/>
                    </a>
                  </div>
                </div>
                <hr/>
                <h3 className="font-size-base pt-4 pb-2">Or using form
                  below</h3>
                <form className="needs-validation" noValidate>
                  <div className="input-group-overlay form-group">
                    <div className="input-group-prepend-overlay">
                <span className="input-group-text">
                  <i className="czi-mail"/>
                </span>
                    </div>
                    <input
                      className="form-control prepended-form-control"
                      type="email"
                      placeholder="Email"
                      id="emails"
                      name="email"
                      required
                      onChange={this.emailPost}
                    />
                  </div>
                  <div className="input-group-overlay form-group">
                    <div className="input-group-prepend-overlay">
                <span className="input-group-text">
                  <i className="czi-locked"/>
                </span>
                    </div>
                    <div className="password-toggle">
                      <input
                        className="form-control prepended-form-control"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        required
                        onChange={this.passwordPost}
                      />
                      <label className="password-toggle-btn">
                        <input className="custom-control-input"
                               type="checkbox"/>
                        <i className="czi-eye password-toggle-indicator"/>
                        <span className="sr-only">Show password</span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        defaultChecked
                        id="remember_me"
                      />
                      <label className="custom-control-label"
                             htmlFor="remember_me">
                        Remember me
                      </label>
                    </div>
                    <Link
                      className="nav-link-inline font-size-sm"
                      to="/recovery_password"
                    
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <hr className="mt-4"/>
                  <div className="text-right pt-4">
                    <button className="btn btn-primary" type="submit"
                            onClick={this.logIn}>
                      
                      <i className="czi-sign-in mr-2 ml-n21"/>
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-4 mt-3 mt-md-0">
            <h2 className="h4 mb-3">No account? Sign up</h2>
            <p className="font-size-sm text-muted mb-4">
              Registration takes less than a minute but gives you full control
              over
              your orders.
            </p>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-fn">First Name</label>
                    <input className="form-control"
                           type="text"
                           id="reg-fn"
                           onChange={this.firstName}
                    />
                    <div className="invalid-feedback">
                      Please enter your first name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-ln">Last Name</label>
                    <input className="form-control"
                           type="text"
                           id="reg-ln"
                           onChange={this.lastName}
                    />
                    <div className="invalid-feedback">
                      Please enter your last name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={this.emailReg}
                    />
                    <div className="invalid-feedback">
                      Please enter valid email address!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-phone">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      id="reg-phone"
                      onChange={this.phoneNumber}
                    
                    />
                    <div className="invalid-feedback">
                      Please enter your phone number!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-password"
                      name="password"
                      required
                      onChange={this.passwordReg}
                    />
                    <div className="invalid-feedback">Please enter password!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-password-confirm">Confirm
                      Password</label>
                    <input
                      className="form-control"
                      type="password"
                      required
                      id="reg-password-confirm"
                    />
                    <div className="invalid-feedback">Passwords do not
                      match!
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button className="btn btn-primary" type="submit"
                        onClick={this.onSubmits}>
                  <i className="czi-user mr-2 ml-n1"/>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({authentication: {loggingIn, user}}) => {
  return {loggingIn, user}
}


export default connect(mapStateToProps, null)(MyAccount)





