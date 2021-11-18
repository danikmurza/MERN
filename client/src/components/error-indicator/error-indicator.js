import React from 'react'
import './error-indicator.css'

const ErrorIndicator = () => {
  return (
    <div className="alert alert-primary alert-with-icon" role="alert">
      <div className="alert-icon-box">
        <i className="alert-icon czi-bell"/>
      </div>
      Error!
    </div>
  )
}

export default ErrorIndicator
