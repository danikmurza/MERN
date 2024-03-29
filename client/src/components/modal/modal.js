import React from 'react'

export const Modal = () => {
  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="font-size-sm">Modal body text goes here.....</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
