import React from 'react'

const ProductsGridItem = ({product, onAddedToCart}) => {
  const {title, author, price, img} = product
  return (
    <div>
      <div className="card product-card">
        <button className="btn-wishlist btn-sm"
                type="button"
                data-toggle="tooltip"
                data-placement="left"
                title="Add to wishlist">
          <i className="czi-heart"/>
        </button>
        <a className="card-img-top d-block overflow-hidden"
           href="/">
          <img src={img} alt="Product"/>
        </a>
        <div className="card-body py-2">
          <a className="product-meta d-block font-size-xs pb-1"
             href="/">
            {title}
          </a>
          <h3 className="product-title font-size-sm">
            <a href="/">{author}</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
                    <span className="text-accent">
                      ${price}.<small>99</small>
                    </span>
            </div>
            <div className="star-rating">
              <i className="sr-star czi-star-filled active"/>
              <i className="sr-star czi-star-filled active"/>
              <i className="sr-star czi-star-filled active"/>
              <i className="sr-star czi-star-filled active"/>
              <i className="sr-star czi-star-filled active"/>
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <button
            className="btn btn-primary btn-sm btn-block mb-2"
            type="button"
            data-toggle="toast"
            data-target="/cart-toast"
            onClick={onAddedToCart}
          >
            <i className="czi-cart font-size-sm mr-1"/>
            Add to Cart
          </button>
          <div className="text-center">
            <a
              className="nav-link-style font-size-ms"
              href="/"
              data-toggle="modal"
            >
              <i className="czi-eye align-middle mr-1"/>
              Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none"/>
    </div>
  );
};

export default ProductsGridItem
