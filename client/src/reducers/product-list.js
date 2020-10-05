const updateProductList = (state, action) => {
  
  if (state === undefined) {
    return {
      products: [],
      loading: true,
      error: null
    }
  }
  
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        products: [],
        loading: true,
        error: null
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        loading: false,
        error: null
      }
    case 'SORT_PRODUCTS_PRICE':
      const sortProductsPrice = state.productList.products.sort((a, b) => a.price - b.price)
      return {
        products: sortProductsPrice,
        loading: false,
        error: null
      }
    case 'REVERSE_PRODUCTS_PRICE':
      const reversProductsPrice = state.productList.products.sort((a, b) => b.price - a.price)
      return {
        products: reversProductsPrice,
        loading: false,
        error: null
      }
    case 'SORT_PRODUCTS_AZ':
      const sortProductsAZ = state.productList.products.sort((a, b) => {
        if (a.name < b.name) {
          return (-1)
        }
        if (a.name > b.name) {
          return (1)
        }
        return 0
      })
      return {
        products: sortProductsAZ,
        loading: false,
        error: null
      }
    case 'REVERSE_PRODUCTS_ZA':
      const reversProductsZA = state.productList.products.sort((a, b) => {
        if (a.name > b.name) {
          return (-1)
        }
        if (a.name < b.name) {
          return (1)
        }
        return 0
      })
      return {
        products: reversProductsZA,
        loading: false,
        error: null
      }
    case 'FILTER_BY_VALUE':
      let filteredValues = state.productList.products.filter(product => {
        return product.title.toLowerCase().includes(action.payload)
      })
      return {
        products: filteredValues,
        loading: false,
        error: null
      }
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        loading: false,
        error: action.error
      }
    case 'PRODUCT_DESCRIPTION':
      const pro = state.productList.products.filter(product => product._id === action.payload)
      return {
        products: pro,
        loading: false,
        error: null,
      }
    default:
      return state.productList
  }
}

export default updateProductList
