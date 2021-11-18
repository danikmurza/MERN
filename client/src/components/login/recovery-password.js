import React from 'react'
import {userService} from "../../service/user.service";

export  default  class RecoveryPassword extends React.Component {

  state = {
    email: '',
    message: ''
  }
  recover = (e) => {
    e.preventDefault()
    userService.recovery(this.state.email)
        .then(res => this.setState({message: res}))
        .catch(err => console.log(err))
    this.setState({email: ''})
  }



  render() {
  
  console.log(this.state.message)
    if(this.state.message){
      return (
          <div style={{height: "400px"}}>
          <div className="alert alert-primary" role="alert">
          <h4 style={{textAlign: "center", color: "red"}}>  {this.state.message.message}</h4>
          </div>
          </div>
    )
    }
  return (
    <div className="container py-4 py-lg-5 my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="h3 mb-4">Forgot your password?</h2>
          <p className="font-size-md">
            Change your password in three easy steps. This helps to keep your
            new
            password secure.
          </p>
          <ol className="list-unstyled font-size-md">
            <li>
              <span className="text-primary mr-2">1.</span>Fill in your email
              address below.
            </li>
            <li>
              <span className="text-primary mr-2">2.</span>We'll email you a
              temporary code.
            </li>
            <li>
              <span className="text-primary mr-2">3.</span>Use the code to
              change
              your password on our secure website.
            </li>
          </ol>
          <div className="card py-2 mt-4">
            <form className="card-body needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="recover-email">Enter your email address</label>
                <input
                  className="form-control"
                  type="email"
                  id="recover-email"
                  value={this.state.email}
                  onChange={(e)=> this.setState({email: e.target.value})}
                  required
                />
                <div className="invalid-feedback">
                  Please provide valid email address.
                </div>
              </div>
              <button className="btn btn-primary" type="submit" onClick={this.recover}>
                Get new password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}
