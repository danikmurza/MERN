import React, {Component} from 'react'
import avatar from "../css/img/shop/account/avatar.jpg";
import {Link} from "react-router-dom";
import {userAction} from "../../actions"
import {connect} from 'react-redux'
import axios from 'axios'

class AccountProfile extends Component {
  
  state = {
    user: JSON.parse(localStorage.getItem('user')).user,
    firstName: JSON.parse(localStorage.getItem('user')).user.firstName,
    lastName: JSON.parse(localStorage.getItem('user')).user.lastName,
    password: '',
    phoneNumber: JSON.parse(localStorage.getItem('user')).user.phoneNumber,
    confirmPassword: '',
    _id: JSON.parse(localStorage.getItem('user')).user._id,
    email: JSON.parse(localStorage.getItem('user')).user.email,
    wishlist: JSON.parse(localStorage.getItem('wishlist')),
    jwtSecret: JSON.parse(localStorage.getItem('user')).user.jwtSecret,
    jwtQuestion: JSON.parse(localStorage.getItem('user')).user.jwtQuestion,
    file: null,
    loaded: 'http://localhost:5000/api/auth/public%5Cimages%5C1601924611104IMG-4999.JPG'
  }
  
  updateProfile = (e) => {
    const {_id, firstName, lastName, password, phoneNumber, confirmPassword, jwtSecret, jwtQuestion} = this.state;
    e.preventDefault()
    if (password.length > 0) {
      if (password !== confirmPassword) {
        alert("Passwords Don't Match")
      }
      if (password === confirmPassword) {
        this.props.dispatch(userAction.updateProfile(
          _id, firstName, lastName, password, phoneNumber, jwtSecret, jwtQuestion
        ))
      }
    }
    if (password.length === 0) {
      this.props.dispatch(userAction.updateProfile(
        _id, firstName, lastName, password, phoneNumber, jwtSecret, jwtQuestion
      ))
    }
  }
  
  onChangeHadler = event => {
    this.setState({file: event.target.files[0]})
  }
  
  
  uploadAvatar = async (e) => {
    e.preventDefault()
    const data = new FormData()
    console.log(this.state._id)
    data.append('file', this.state.file)
    data.append('name', this.state._id)
    // this.props.dispatch(userAction.avatar(data))
    await axios.post("http://localhost:5000/api/auth/upload", data)
      .then(response => this.setState({loaded: response}))
      .catch(error => console.log(error))
    // await axios.get("http://localhost:5000/api/auth/download", {'Content-Type': 'images/JPEG'})
    //   .then(response=> this.setState({loaded: response}))
    //   .catch(error=> console.log(error))
  }
  
  render() {
    const {firstName, lastName, phoneNumber, email, wishlist, user, jwtSecret, jwtQuestion, loaded} = this.state
    
    console.log(this.state.loaded)
    if (this.state.user) {
      return (
        <div>
          
          {/* Page Title*/}
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
                      <Link to="/account_profile">Account</Link>
                    </li>
                    <li
                      className="breadcrumb-item text-nowrap active"
                      aria-current="page"
                    >
                      Profile info
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                <h1 className="h3 text-light mb-0">Profile info</h1>
              </div>
            </div>
          </div>
          {/* Page Content*/}
          <div className="container pb-5 mb-2 mb-md-3">
            <div className="row">
              {/* Sidebar*/}
              <aside className="col-lg-4 pt-4 pt-lg-0">
                <div
                  className="cz-sidebar-static rounded-lg box-shadow-lg px-0 pb-0 mb-5 mb-lg-0">
                  <div className="px-4 mb-4">
                    <div className="media align-items-center">
                      <div
                        className="img-thumbnail rounded-circle position-relative"
                        style={{width: "6.375rem"}}>
                <span className="badge badge-warning"
                      data-toggle="tooltip"
                      title="Reward points">
                  384
                </span>
                        <img className="rounded-circle"
                             src={avatar}
                             alt="Susan Gardner"/>
                      </div>
                      <div className="media-body pl-3">
                        <h3
                          className="font-size-base mb-0">{`${firstName}  ${lastName}`}</h3>
                        <span className="text-accent font-size-sm">
                  {email}
                </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-secondary px-4 py-3">
                    <h3 className="font-size-sm mb-0 text-muted">Dashboard</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        to="/account_orders">
                        <i className="czi-bag opacity-60 mr-2"/>
                        Orders<span
                        className="font-size-sm text-muted ml-auto">{user.orders.length > 0 ? user.orders.length : 0}</span>
                      </Link>
                    </li>
                    <li className="border-bottom mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        to="/account_wishlist"
                      >
                        <i className="czi-heart opacity-60 mr-2"/>
                        Wishlist
                        <span
                          className="font-size-sm text-muted ml-auto">{wishlist.length ? wishlist.length : 0}</span>
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        to="/account_tickets"
                      >
                        <i className="czi-help opacity-60 mr-2"/>
                        Support tickets
                        <span
                          className="font-size-sm text-muted ml-auto">{user.ticket.length > 0 ? user.ticket.length : 0}</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="bg-secondary px-4 py-3">
                    <h3 className="font-size-sm mb-0 text-muted">Account
                      settings</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3 active"
                        to="/account_profile"
                      >
                        <i className="czi-user opacity-60 mr-2"/>
                        Profile info
                      </Link>
                    </li>
                    <li className="border-bottom mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        to="/account_address"
                      >
                        <i className="czi-location opacity-60 mr-2"/>
                        Addresses
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        to="/account_payment"
                      >
                        <i className="czi-card opacity-60 mr-2"/>
                        Payment methods
                      </Link>
                    </li>
                    <li className="d-lg-none border-top mb-0">
                      <a
                        className="nav-link-style d-flex align-items-center px-4 py-3"
                        href="/"
                      >
                        <i className="czi-sign-out opacity-60 mr-2"/>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              {/* Content  */}
              <section className="col-lg-8">
                {/* Toolbar*/}
                <div
                  className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
                  <h6 className="font-size-base text-light mb-0">
                    Update you profile details below:
                  </h6>
                  <Link className="btn btn-primary btn-sm"
                        onClick={() => userAction.logout()}
                        to="/">
                    <i className="czi-sign-out mr-2"/>
                    Sign out
                  </Link>
                </div>
                {/* Profile form*/}
                <form>
                  <div className="bg-secondary rounded-lg p-4 mb-4">
                    <div className="media align-items-center">
                      <img
                        src={loaded ? loaded : avatar}
                        width={90}
                        alt="Susan Gardner"
                      />
                      <div className="media-body pl-3">
                        <input type="file" name="file"
                               onChange={this.onChangeHadler}/>
                        <button
                          className="btn btn-light btn-shadow btn-sm mb-2"
                          type="file"
                          onClick={this.uploadAvatar}
                        >
                          <i className="czi-loading mr-2"/>
                          Change avatar
                        </button>
                        <div className="p mb-0 font-size-ms text-muted">
                          Upload JPG, GIF or PNG image. 300 x 300 required.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-fn">First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="account-fn"
                          value={firstName}
                          onChange={(e) => this.setState({firstName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-ln">Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="account-ln"
                          value={lastName}
                          onChange={(e) => this.setState({lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-fn">Secret Question</label>
                        <input
                          className="form-control"
                          type="text"
                          id="jwtSecret"
                          value={jwtQuestion}
                          onChange={(e) => this.setState({jwtQuestion: e.target.value})}
                        
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-ln">Answer</label>
                        <input
                          className="form-control"
                          type="text"
                          id="jwtQuestion"
                          value={jwtSecret}
                          onChange={(e) => this.setState({jwtSecret: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-email">Email Address</label>
                        <input
                          className="form-control"
                          type="email"
                          id="account-email"
                          defaultValue={email}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-phone">Phone Number</label>
                        <input
                          className="form-control"
                          type="text"
                          id="account-phone"
                          value={phoneNumber}
                          onChange={(e) => this.setState({phoneNumber: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-pass">New Password</label>
                        <div className="password-toggle">
                          <input
                            className="form-control"
                            type="password"
                            id="account-pass"
                            onChange={(e) => this.setState({password: e.target.value})}
                          />
                          <label className="password-toggle-btn">
                            <input className="custom-control-input"
                                   type="checkbox"/>
                            <i className="czi-eye password-toggle-indicator"/>
                            <span className="sr-only">Show password</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="account-confirm-pass">Confirm
                          Password</label>
                        <div className="password-toggle">
                          <input
                            className="form-control"
                            type="password"
                            id="account-confirm-pass"
                            onChange={(e) => this.setState({confirmPassword: e.target.value})}
                          />
                          <label className="password-toggle-btn">
                            <input className="custom-control-input"
                                   type="checkbox"/>
                            <i className="czi-eye password-toggle-indicator"/>
                            <span className="sr-only">Show password</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="mt-2 mb-3"/>
                      <div
                        className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox d-block">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            id="subscribe_me"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="subscribe_me"
                          >
                            Subscribe me to Newsletter
                          </label>
                        </div>
                        <button className="btn btn-primary mt-3 mt-sm-0"
                                type="button"
                                onClick={this.updateProfile}
                        
                        >
                          Update profile
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
          {/* Footer*/}
        </div>
      )
    }
    if (!this.state.user) {
      return (
        <div></div>
      )
    }
  }
  
}

export default connect(null, null)(AccountProfile)
