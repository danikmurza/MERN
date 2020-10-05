import React, {Component} from 'react'
import avatar from '../css/img/shop/account/avatar.jpg'
import {Link} from "react-router-dom"
import {userAction} from "../../actions"
import {connect} from 'react-redux'

class AccountAddress extends Component {
  
  state = {
    show: '',
    userId: JSON.parse(localStorage.getItem('user')),
    address: JSON.parse(localStorage.getItem('user')).user.address,
    firstName: '',
    lastName: '',
    company: '',
    city: '',
    line1: '',
    line2: '',
    postalCode: '',
    primary: false,
    error: '',
    edit: '',
    wishlist: JSON.parse(localStorage.getItem('wishlist')),
  }
  closedModal = () => {
    this.setState({show: 'none'})
  }
  addNewAddress = async (e) => {
    e.preventDefault()
    const {
      firstName, lastName, company, country, city,
      postalCode, line1, line2, userId
    } = this.state
    await this.props.dispatch(userAction.address(userId.userId, {
      firstName, lastName, company, country, city, line1, line2, postalCode
    }, "addAddress"))
    this.closedModal()
  }
  
  removeAddress = (e) => {
    e.preventDefault()
    let _id = e.currentTarget.value
    this.props.dispatch(userAction.address(this.state.userId.userId, {_id}, "deleteAddress"))
  }
  
  handleInputChange = (event) => {
    const target = event.target
    console.log(target.checked)
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      
      [name]: value
    });
  }
  
  editAddress = (e) => {
    console.log(e.currentTarget.value)
    const ed = this.state.address.filter(addres => addres._id === e.currentTarget.value)
    this.setState({show: 'block', edit: ed})
    this.setState({edit: ''})
    
  }
  
  
  render() {
    const {
      show, firstName, lastName, company, edit, userId, wishlist,
      country, city, postalCode, line1, line2, address
    } = this.state
    
    return (
      <div>
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
                    <Link to="/account_address">Account</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page">
                    Addresses
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
              <h1 className="h3 text-light mb-0">My addresses</h1>
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
                        className="font-size-base mb-0">{userId.user.firstName + "  " + userId.user.lastName}</h3>
                      <span className="text-accent font-size-sm">
                        {userId.user.email}
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
                      className="font-size-sm text-muted ml-auto">{userId.user.orders.length > 0 ? userId.user.orders.length : 0}</span>
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
                        className="font-size-sm text-muted ml-auto">{wishlist ? wishlist.length : 0}</span>
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      className="nav-link-style d-flex align-items-center px-4 py-3"
                      to="/account_tickets"
                    >
                      <i className="czi-help opacity-60 mr-2"/>
                      Support tickets
                      <span className="font-size-sm text-muted ml-auto">
                        {userId.user.ticket.length > 0 ? userId.user.ticket.length : 0}
                      </span>
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
                      className="nav-link-style d-flex align-items-center px-4 py-3"
                      to="/account_profile"
                    >
                      <i className="czi-user opacity-60 mr-2"/>
                      Profile info
                    </Link>
                  </li>
                  <li className="border-bottom mb-0">
                    <Link
                      className="nav-link-style d-flex align-items-center px-4 py-3 active"
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
                className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-4">
                <h6 className="font-size-base text-light mb-0">
                  List of your registered addresses:
                </h6>
                <Link className="btn btn-primary btn-sm"
                      onClick={() => userAction.logout()}
                      to="/">
                  <i className="czi-sign-out mr-2"/>
                  Sign out
                </Link>
              </div>
              {/* Addresses list*/}
              <div className="table-responsive font-size-md">
                <table className="table table-hover mb-0">
                  <thead>
                  <tr>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {address ? address.map((location, index) => {
                      const {_id, country, city, line1, line2, postalCode} = location //destructuring
                      return (
                        <tr key={index}>
                          <td>{` ${line1} ${line2} ${city} ${country} ${postalCode}`}
                            <span className="align-middle badge badge-info ml-2">
                    Primary
                    </span></td>
                          <td className="py-3 align-middle">
                            <button
                              className="nav-link-style mr-2"
                              style={{backgroundColor: 'white', border: 'none'}}
                              data-toggle="tooltip"
                              title="Edit"
                              value={_id}
                              onClick={this.editAddress}
                            >
                              <i className="czi-edit"/>
                            </button>
                            <button
                              className="nav-link-style text-danger"
                              style={{backgroundColor: 'white', border: 'none'}}
                              data-toggle="tooltip"
                              title="Remove"
                              value={_id}
                              onClick={(e) => {
                                this.removeAddress(e)
                              }}
                            >
                              <div className="czi-trash"/>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                    : null
                  }
                  </tbody>
                </table>
              </div>
              <hr className="pb-4"/>
              <div className="text-sm-right">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  onClick={() => this.setState({show: 'block'})}
                >
                  Add new address
                </button>
              </div>
            </section>
          </div>
        </div>
        {/* Modal*/}
        
        
        <div
          className="needs-validation modal fade show"
          // method="post"
          id="add-address"
          tabIndex={-1}
          // noValidate
          aria-modal="true"
          style={{paddingRight: 34, display: show}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a new address</h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closedModal}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-fn">First name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-fn"
                        value={edit ? edit[0].firstName : firstName}
                        onChange={(e) => this.setState({firstName: e.target.value})}
                        required
                      />
                      <div className="invalid-feedback">
                        Please fill in you first name!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-ln">Last name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-ln"
                        value={lastName}
                        onChange={(e) => this.setState({lastName: e.target.value})}
                        required
                      />
                      <div className="invalid-feedback">
                        Please fill in you last name!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-company">Company</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-company"
                        value={company}
                        onChange={(e) => this.setState({company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-country">Country</label>
                      <select className="custom-select" id="address-country"
                              value={country}
                              onChange={(e) => this.setState({country: e.target.value})}
                              required>
                        <option value>Select country</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Belgium">Belgium</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Spain">Spain</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">USA</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select your country!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-city">City</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-city"
                        value={city}
                        onChange={(e) => this.setState({city: e.target.value})}
                        required
                      />
                      <div className="invalid-feedback">Please fill in your
                        city!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-line1">Line 1</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-line1"
                        value={line1}
                        onChange={(e) => this.setState({line1: e.target.value})}
                        required
                      />
                      <div className="invalid-feedback">
                        Please fill in your address!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-line2">Line 2</label>
                      <input className="form-control" type="text"
                             id="address-line2"
                             value={line2}
                             onChange={(e) => this.setState({line2: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address-zip">ZIP code</label>
                      <input
                        className="form-control"
                        type="text"
                        id="address-zip"
                        value={postalCode}
                        onChange={(e) => this.setState({postalCode: e.target.value})}
                        required
                      />
                      <div className="invalid-feedback">Please add your ZIP
                        code!
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        //name="isGoing"
                        //type="checkbox"
                        //checked={this.state.primary}
                        //onChange={this.handleInputChange}
                      />
                      <label className="custom-control-label"
                             htmlFor="address-primary">
                        Make this address primary
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                  onClick={this.closedModal}
                >
                  Close
                </button>
                <button className="btn btn-primary btn-shadow" type="submit"
                        onClick={this.addNewAddress}>
                  Add address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(AccountAddress)
