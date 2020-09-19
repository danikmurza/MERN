import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from "@material-ui/core/Box"

import gallery1 from '../css/img/shop/single/gallery/01.jpg'
import gallery2 from '../css/img/shop/single/gallery/02.jpg'
import gallery3 from '../css/img/shop/single/gallery/03.jpg'
import gallery4 from '../css/img/shop/single/gallery/04.jpg'
import galleryth1 from '../css/img/shop/single/gallery/th01.jpg'
import galleryth2 from '../css/img/shop/single/gallery/th02.jpg'
import galleryth3 from '../css/img/shop/single/gallery/th03.jpg'
import single1 from '../css/img/shop/single/color-opt-1.png'
import single2 from '../css/img/shop/single/color-opt-2.png'
import single3 from '../css/img/shop/single/color-opt-3.png'


export const ModalProduct = ({show, closedModal, product}) => {
  
  const {name, brand, price, img, review} = product
  
  const addProduct = (e) => {
    let products = [];
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'))
    }
    let pro = products.find(p => p._id === product._id)
    if (pro) {
      products.map(p => p._id === product._id ? p.count++ : p.count)
    }
    if (!pro) {
      products.push({
        _id: product._id,
        name: name,
        price: price,
        img: img,
        count: 1,
        review: review,
        brand: brand
      })
    }
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  return (
    <div className="modal-quick-view modal fade show"
         id="quick-view"
         tabIndex={-1}
         style={{display: show, paddingRight: 21}}
         aria-modal="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title product-title">
              <a href="/"
                 data-toggle="tooltip"
                 data-placement="right"
                 title='sport'
                 data-original-title="Go to product page"
              >
                {name}
                <i className="czi-arrow-right font-size-lg ml-2"/>
              </a>
            </h4>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closedModal}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              {/* Product gallery*/}
              <div className="col-lg-7 pr-lg-0">
                <div className="cz-product-gallery">
                  <div className="cz-preview order-sm-2">
                    <div className="cz-preview-item" id="first">
                      <img className="cz-image-zoom"
                           src={gallery1}
                           data-zoom={gallery1}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className="cz-preview-item" id="second">
                      <img className="cz-image-zoom"
                           src={gallery2}
                           data-zoom={gallery2}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className="cz-preview-item" id="third">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={gallery3}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className="cz-preview-item active" id="fourth">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={gallery4}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                  </div>
                  <div className="cz-thumblist order-sm-1">
                    <a className="cz-thumblist-item" href="/">
                      <img src={galleryth1}
                           alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item" href="/">
                      <img src={galleryth2}
                           alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item" href="/">
                      <img src={galleryth3}
                           alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item active" href="/">
                      <img src={img}
                           alt="Product thumb"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Product details*/}
              <div className="col-lg-5 pt-4 pt-lg-0 cz-image-zoom-pane">
                <div className="product-details ml-auto pb-3">
                  <div
                    className="d-flex justify-content-between align-items-center mb-2">
                    <a href="/">
                      {/*<div className="star-rating">*/}
                      {/*  <i className="sr-star czi-star-filled active"/>*/}
                      {/*  <i className="sr-star czi-star-filled active"/>*/}
                      {/*  <i className="sr-star czi-star-filled active"/>*/}
                      {/*  <i className="sr-star czi-star-filled active"/>*/}
                      {/*  <i className="sr-star czi-star"/>*/}
                      {/*</div>*/}
                      {review[0].rating
                        ? <Box component="fieldset" mb={3}
                               borderColor="transparent">
                          <Rating name="half-rating-read"
                                  size="small"
                                  defaultValue={review[0].rating}
                                  precision={0.5} readOnly/>
                          <span
                            className="d-inline-block font-size-sm text-body align-middle  ml-3 mb-2">
                    74 Reviews
                  </span>
                        </Box>
                        : null
                      }
  
                    </a>
                    <button className="btn-wishlist"
                            type="button"
                            data-toggle="tooltip"
                      // title
                            data-original-title="Add to wishlist">
                      <i className="czi-heart"/>
                    </button>
                  </div>
                  <div className="mb-3">
                <span className="h3 font-weight-normal text-accent mr-1">
                  ${price}
                </span>
                    <del className="text-muted font-size-lg mr-3">
                      ${price}.<small>00</small>
                    </del>
                    <span
                      className="badge badge-danger badge-shadow align-middle mt-n2">
                  Sale
                </span>
                  </div>
                  <div className="font-size-sm mb-4">
                <span className="text-heading font-weight-medium mr-1">
                  Brand:
                </span>
                    <span className="text-muted">{brand}</span>
                  </div>
                  <div className="position-relative mr-n4 mb-3">
                    <div
                      className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input"
                             type="radio"
                             name="color"
                             id="color1"
                             defaultChecked
                      />
                      <label className="custom-option-label rounded-circle"
                             htmlFor="color1"
                      >
                    <span className="custom-option-color rounded-circle"
                          style={{
                            backgroundImage: `url(${single1})`
                          }}/>
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option custom-control-inline mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="color"
                        id="color2"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color2"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{
                        backgroundImage: `url(${single2})`
                      }}
                    />
                      </label>
                    </div>
                    <div
                      className="custom-control custom-option custom-control-inline mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="color"
                        id="color3"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color3"
                      >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{
                        backgroundImage: `url(${single3})`
                      }}
                    />
                      </label>
                    </div>
                    <div className="product-badge product-available mt-n1">
                      <i className="czi-security-check"/>
                      Product available
                    </div>
                  </div>
                  <form className="mb-grid-gutter">
                    <div className="form-group">
                      <label
                        className="font-weight-medium pb-1"
                        htmlFor="product-size"
                      >
                        Size:
                      </label>
                      <select className="custom-select" required
                              id={product._id}>
                        <option value>Select size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                    </div>
                    <div className="form-group d-flex align-items-center">
                      <select
                        className="custom-select mr-3"
                        style={{width: "5rem"}}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <button
                        className="btn btn-primary btn-shadow btn-block"
                        type="submit"
                        onClick={addProduct}
                      >
                        <i className="czi-cart font-size-lg mr-2"/>
                        Add to Cart
                      </button>
                    </div>
                  </form>
                  <h5 className="h6 mb-3 pb-2 border-bottom">
                    <i
                      className="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2"/>
                    Product info
                  </h5>
                  <h6 className="font-size-sm mb-2">Style</h6>
                  <ul className="font-size-sm pl-4">
                    <li>Hooded top</li>
                  </ul>
                  <h6 className="font-size-sm mb-2">Composition</h6>
                  <ul className="font-size-sm pl-4">
                    <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                    <li>Lining: Cotton 100%</li>
                    <li>Cotton 80%, Polyester 20%</li>
                  </ul>
                  <h6 className="font-size-sm mb-2">Art. No.</h6>
                  <ul className="font-size-sm pl-4 mb-0">
                    <li>183260098</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


