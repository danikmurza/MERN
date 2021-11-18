import {productService} from "../service/product-service"


const requested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}
const loaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  }
}
export const sortProductPrice = () => {
  return {
    type: 'SORT_PRODUCTS_PRICE'
  }
}
export const productDescription = (product) => {
  return {
    type: 'PRODUCT_DESCRIPTION',
    payload: product
  }
}
export const reverseProductPrice = () => {
  return {
    type: 'REVERSE_PRODUCTS_PRICE'
  }
}
export const sortProductPAtoZ = () => {
  return {
    type: 'SORT_PRODUCTS_AZ'
  }
}
export const reverseProductZtoA = () => {
  return {
    type: 'REVERSE_PRODUCTS_ZA'
  }
}
const filterByValue = (products) => {
  return {
    type: 'FILTER_BY_VALUE',
    payload: products,
  }
}
const Error = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  }
}

export const fetchProducts = () => {
  return async dispatch => {
    dispatch(requested())
    await fetch('http://74.208.89.79/products', requestOptions)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch(loaded(res))
        return res
      })
      .catch(error => {
        dispatch(Error(error))
      })
  }
}


const requestOptions = {
  method: "GET",
  headers: {'Content-Type': 'application/json'}
}

// export const fetchProducts = () => {
//   return async dispatch => {
//     dispatch(requested())
//
//     productService.getAll()
//         .then(user => {dispatch(loaded(user))},
//             error => {dispatch(Error(error))}
//         )
//   }
// }
const  product = (body) => {
  return dispatch => {
    dispatch(requested())
    
    productService.product(body)
      .then(user => {dispatch(loaded(user))},
        error => {dispatch(Error(error))}
      )
  }
}

export const filters = {
  filterByValue,
  product
}

