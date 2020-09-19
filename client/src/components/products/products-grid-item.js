import React, {useState} from 'react'
import {ModalProduct} from "../modal/modalProduct"
import Rating from '@material-ui/lab/Rating'
import Box from "@material-ui/core/Box"


const ProductsGridItem = ({product, productDescription}) => {
  const {name, price, img, count, review, brand} = product
  
  const [show, setShow] = useState('none')
  const closedModel = () => {
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
      <div className="card product-card">
        <button className="btn-wishlist btn-sm"
                type="button"
                data-toggle="tooltip"
                data-placement="left"
                title="wishlist"
                onClick={addProduct}
        >
          <i className="czi-heart"/>
        </button>
        <button className="card-img-top d-block overflow-hidden "
                style={{border: 'none', background: "white"}}
                value={product._id}
                onClick={productDescription}
        >
          <img src={img} alt="Product"/>
        </button>
        <div className="card-body py-2">
          <button
            className="product-meta d-block font-size-xs pb-1 p-0 m-0 pl-0 pr-0 ml-0 mr-0"
            style={{border: 'none', background: "white"}}
            value={product._id}
            onClick={productDescription}
            to="/pd">
            {name}
          </button>
          <div>
            <span>
              {count} <span style={{color: "black"}}>in stock</span>
            </span>
          </div>
          <hr className="m-1"/>
          <div className="d-flex justify-content-between">
            <div className="product-price">
                    <span className="text-accent">
                      ${price}
                    </span>
            </div>
            {review[0].rating
              ? <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="half-rating-read" defaultValue={review[0].rating}
                        size="small"
                        precision={0.5} readOnly/>
              </Box>
              : null
            }
          
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <button
            className="btn btn-primary btn-sm btn-block mb-2"
            title="products"
            type="button"
            data-toggle="toast"
            data-target="/cart-toast"
            onClick={addProduct}
          >
            <i className="czi-cart font-size-sm mr-1"/>
            Add to Cart
          </button>
          <div className="text-center">
            <button
              className="nav-link-style font-size-lg "
              style={{border: 'none', background: "white"}}
              data-toggle="modal"
              onClick={() => setShow('block')}
            >
              <i className="czi-eye align-middle mr-1"/>
              Quick view
            </button>
          </div>
        </div>
      </div>
      <hr className="d-sm-none"/>
      <ModalProduct
        show={show}
        closedModal={closedModel}
        product={product}
        // onAddedToCart={onAddedToCart}
      
      />
    </div>
  );
};


export default ProductsGridItem
