const productsRequested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}

const productsLoaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  }
}
export const loadNewPage = (products) => {
  return {
    type: 'LOAD_NEW_PAGE',
    payload: products
  }
}

export const loadExactPage = (products) => {
  return {
    type: 'LOAD_EXACT_PAGE',
    payload: products
  }
}

export const sortProductPrice = () => {
  return {
    type: 'SORT_PRODUCTS_PRICE'
  }
}
export const productDescription = (product) => {
  console.log(product)
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

function filterByValue(products) {
  console.log(products)
  return {
    type: 'FILTER_BY_VALUE',
    payload: products,
  }
}

const productsError = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  }
}

export const productAddedToCart = (productId) => {
  return {
    type: 'PRODUCTS_ADDED_TO_CART',
    payload: productId
  }
}

export const productRemovedFromCart = (productId) => {
  return {
    type: 'PRODUCTS_REMOVED_FROM_CART',
    payload: productId
  }
}

export const allProductsRemovedFromCart = (productId) => {
  return {
    type: 'ALL_PRODUCTS_REMOVED_FROM_CART',
    payload: productId
  }
}

export function fetchProducts() {
  return async dispatch => {
    dispatch(productsRequested())
    await fetch('http://localhost:5000/api/product')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error)
        }
        dispatch(productsLoaded(res))
        return res
      })
      .catch(error => {
        dispatch(productsError(error))
      })
  }
}

export const filters = {
  filterByValue
}

