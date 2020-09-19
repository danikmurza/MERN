import React, {useState} from 'react'
import './products-list.css'
import {ModalProduct} from "../modal/modalProduct"
import {Link} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";


const ProductsListItem = ({product, productDescription}) => {
  
  const {name, brand, price, img, review} = product
  
  const [show, setShow] = useState('none')
  
  const closedModal = () => {
    setShow('none')
  }
  
  const addProduct = (e) => {
    let productsTitle = e.currentTarget.title
    let products = [];
    if (localStorage.getItem(productsTitle)) {
      products = JSON.parse(localStorage.getItem(productsTitle))
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
    localStorage.setItem(productsTitle, JSON.stringify(products));
  }
  
  return (
    <div>
      <div className="card product-card product-list">
        <button className="btn-wishlist btn-sm"
                type="button"
                data-toggle="tooltip"
                data-placement="left"
                title="wishlist"
                onClick={addProduct}
        >
          <i className="czi-heart"/>
        </button>
        <div className="d-sm-flex align-items-center">
          <button className="product-list-thumb"
                  style={{border: 'none', background: "white"}}
                  value={product._id}
                  onClick={productDescription}
                  to="/pd">
            <img src={img} alt="Product"
                 style={{height: '150px', width: '130px'}}/>
          </button>
          <div className="card-body py-2">
            <button className="product-meta d-block font-size-xs pb-1"
                    style={{border: 'none', background: "white"}}
                    value={product._id}
                    onClick={productDescription}
                    to="/pd">{name}
            </button>
            <h3 className="product-title font-size-base">
              <Link to="/pd">{brand}</Link>
            </h3>
            <div className="d-flex justify-content-between">
              <div className="product-price">
                  <span className="text-accent">
                    ${price}.<small>00</small>
                  </span>
              </div>
              <div className="star-rating">
                {review[0].rating
                  ? <Box component="fieldset" mb={3} borderColor="transparent"
                         name="size-small">
                    <Rating name="size-small" defaultValue={review[0].rating}
                            size="small"
                            precision={0.5} readOnly/>
                  </Box>
                  : null}
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <button
                className="btn btn-primary btn-sm mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
                title="products"
                onClick={addProduct}>
                <i className="czi-cart font-size-sm mr-1"/>
                Add to Cart
              </button>
              <div className="text-left">
                <button
                  className="nav-link-style font-size-lg "
                  style={{border: 'none', background: "white"}}
                  data-toggle="modal"
                  onClick={() => setShow('block')}>
                  <i className="czi-eye align-middle mr-1"/>
                  Quick view
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="pt-3 mt-3"/>
      <ModalProduct
        show={show}
        closedModal={closedModal}
        product={product}/>
    </div>
  );
};

export default ProductsListItem
