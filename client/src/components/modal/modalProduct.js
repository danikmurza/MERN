import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from "@material-ui/core/Box"

import '../../actions/products-action'
import {addProduct, ratings} from "../localStorage/local-storage"


export const ModalProduct = ({show, closedModal, product, productDescription}) => {
  
  const [image, setImage] = useState({img: 'active', img2: '', img3: '', img4: ''})
  
  const {name, brand, price, img, reviews} = product
  
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
              <button
                data-toggle="tooltip"
                style={{backgroundColor: 'white', border: 'none'}}
                data-placement="right"
                title='sport'
                data-original-title="Go to product page"
                value={product._id}
                onClick={productDescription}
              >
                {name}
                <i className="czi-arrow-right font-size-lg ml-2"/>
              </button>
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
    
    
                    <div className={`cz-preview-item ${image.img}`} id="first">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={img}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className={`cz-preview-item ${image.img2}`}
                         id="second">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={img}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className={`cz-preview-item ${image.img3}`} id="third">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={img}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                    <div className={`cz-preview-item ${image.img4}`}
                         id="fourth">
                      <img className="cz-image-zoom"
                           src={img}
                           data-zoom={img}
                           alt="Product"
                      />
                      <div className="cz-image-zoom-pane"/>
                    </div>
                  </div>
                  <div className="cz-thumblist order-sm-1">
    
    
                    <button className={`cz-thumblist-item ${image.img}`}
                            style={{backgroundColor: 'white'}}
                            onClick={() => {
                              setImage({
                                img: 'active',
                                img2: '',
                                img3: '',
                                img4: ''
                              })
                            }}>
                      <img src={img}
                           alt="Product thumb"
                      />
                    </button>
                    <button className={`cz-thumblist-item ${image.img2}`}
                            style={{backgroundColor: 'white'}}
                            onClick={() => {
                              setImage({
                                img: '',
                                img2: 'active',
                                img3: '',
                                img4: ''
                              })
                            }}>
                      <img src={img}
                           alt="Product thumb"
                      />
                    </button>
                    <button className={`cz-thumblist-item ${image.img3}`}
                            style={{backgroundColor: 'white'}}
                            onClick={() => {
                              setImage({
                                img: '',
                                img2: '',
                                img3: 'active',
                                img4: ''
                              })
                            }}>
                      <img src={img}
                           alt="Product thumb"
                      />
                    </button>
                    <button className={`cz-thumblist-item ${image.img}`}
                            style={{backgroundColor: 'white'}}
                            onClick={() => {
                              setImage({
                                img: '',
                                img2: '',
                                img3: '',
                                img4: 'active'
                              })
                            }}>
                      <img src={img}
                           alt="Product thumb"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Product details*/}
              <div className="col-lg-5 pt-4 pt-lg-0 cz-image-zoom-pane">
                <div className="product-details ml-auto pb-3">
                  <div
                    className="d-flex justify-content-between align-items-center mb-2">
                    <a href="/">
                      <div className="star-rating">
                        <Box component="fieldset" mb={3}
                             borderColor="transparent">
                          <Rating name="half-rating-read"
                                  size="small"
                                  defaultValue={reviews.length > 0 ? ratings(reviews) : 0}
                                  precision={0.5} readOnly/>
                          <span
                            className="d-inline-block font-size-sm text-body align-middle  ml-3 mb-2">
                    {reviews.length} Reviews
                  </span>
                        </Box>
                      </div>
  
  
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
                  <div className="position-relative mr-n4">
                    <div className="product-badge product-available mt-n1">
                      <i className="czi-security-check"/>
                      Product available
                    </div>
                  </div>
                  <form className="mb-grid-gutter pt-5">
                    <div className="form-group d-flex align-items-center ">
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
                        onClick={(e) => addProduct(e, product)}
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



