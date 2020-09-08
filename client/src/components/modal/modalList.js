import React, {useState} from 'react'

import cart1 from '../css/img/shop/cart/01.jpg'
import cart2 from '../css/img/shop/cart/02.jpg'
import cart3 from '../css/img/shop/cart/03.jpg'
import cart4 from '../css/img/shop/cart/04.jpg'

export const ModalList = () => {
  
  const [mod, setMod] = useState('none')
  return (
    <div
      className="modal fade show"
      id="order-details"
      style={{display: mod, paddingRight: 21}}
      aria-modal="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Order No - 34VB5540K83</h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setMod('block')}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body pb-0">
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom">
              <div className="media d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart1} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">Women Colorblock Sneakers</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>8.5
                  </div>
                  <div className="font-size-sm">
                    <span
                      className="text-muted mr-2">Color:</span>White &amp; Blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $154.<small>00</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Quantity:</div>
                1
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Subtotal</div>
                $154.
                <small>00</small>
              </div>
            </div>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 pb-sm-2 border-bottom">
              <div className="media d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart2} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">TH Jeans City Backpack</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>Tommy
                    Hilfiger
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Khaki
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $79.<small>50</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Quantity:</div>
                1
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Subtotal</div>
                $79.<small>50</small>
              </div>
            </div>
            {/* Item*/}
            <div
              className="d-sm-flex justify-content-between my-4 pb-3 pb-sm-2 border-bottom">
              <div className="media d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart3} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">3-Color Sun Stash Hat</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>The North
                    Face
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Pink / Beige
                    /
                    Dark blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $22.<small>50</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Quantity:</div>
                1
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Subtotal</div>
                $22.<small>50</small>
              </div>
            </div>
            {/* Item*/}
            <div className="d-sm-flex justify-content-between my-4">
              <div className="media d-block d-sm-flex text-center text-sm-left">
                <a
                  className="d-inline-block mx-auto mr-sm-4"
                  href="/"
                  style={{width: "10rem"}}
                >
                  <img src={cart4} alt="Product"/>
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="/">Cotton Polo Regular Fit</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>42
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Light blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $9.<small>00</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Quantity:</div>
                1
              </div>
              <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                <div className="text-muted mb-2">Subtotal</div>
                $9.<small>00</small>
              </div>
            </div>
          </div>
          {/* Footer*/}
          <div
            className="modal-footer flex-wrap justify-content-between bg-secondary font-size-md">
            <div className="px-2 py-1">
              <span className="text-muted">Subtotal:&nbsp;</span>
              <span>
            $265.<small>00</small>
          </span>
            </div>
            <div className="px-2 py-1">
              <span className="text-muted">Shipping:&nbsp;</span>
              <span>
            $22.<small>50</small>
          </span>
            </div>
            <div className="px-2 py-1">
              <span className="text-muted">Tax:&nbsp;</span>
              <span>
            $9.<small>50</small>
          </span>
            </div>
            <div className="px-2 py-1">
              <span className="text-muted">Total:&nbsp;</span>
              <span className="font-size-lg">
            $297.<small>00</small>
          </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
