import React from 'react'
import {Link} from "react-router-dom";


export const Complete = () => {
  return (
    <div className="container pb-5 mb-sm-4">
      <div className="pt-5">
        <div className="card py-3 mt-sm-3">
          <div className="card-body text-center">
            <h2 className="h4 pb-3">Thank you for your order!</h2>
            <p className="font-size-sm mb-2">
              Your order has been placed and will be processed as soon as
              possible.
            </p>
            <p className="font-size-sm mb-2">
              Make sure you make note of your order number, which is{" "}
              <span className="font-weight-medium">34VB5540K83.</span>
            </p>
            <p className="font-size-sm">
              You will be receiving an email shortly with confirmation of your
              order. <u>You can now:</u>
            </p>
            <Link className="btn btn-secondary mt-3 mr-3" to="/store">
              Go back shopping
            </Link>
            <Link className="btn btn-primary mt-3" to="/order_tracking">
              <i className="czi-location"/>
              &nbsp;Track order
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
