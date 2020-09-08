import React from 'react'
import {connect} from 'react-redux'
import "react-bootstrap"

import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart
} from '../../actions'


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {_id, title, count, total} = item
    return (
      <tr key={_id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(_id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"/>Delete
          </button>
          <button
            onClick={() => onIncrease(_id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle"/>Add
          </button>
          <button
            onClick={() => onDecrease(_id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle"/>Remove
          </button>
        </td>
      </tr>
    )
  }
  
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>
  
        <tbody>
        {items.map(renderRow)}
        </tbody>
      </table>
  
      <div className="total">
        Total: ${total}
      </div>
      <button className="btn btn-secondary" style={{textAlign: "right"}}>Buy
      </button>
    </div>
  )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
