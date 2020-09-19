import {productService} from "../service/product-service"

export function ProRequest() {
  return {
    type: 'FETCH_NEWS_REQUEST'
  }
}

export function ProSuccess(news) {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    products: news
  }
}

export function ProError(error) {
  return {
    type: 'FETCH_NEWS_ERROR',
    products: error
  }
}


function processorAdd(name, brand, specification, price, count, img, type) {
  return dispatch => {
    dispatch(ProRequest())
    
    productService.addProduct(name, brand, specification, price, count, img, type)
      .then(
        user => {
          dispatch(ProSuccess(user))
        },
        error => {
          dispatch(ProError(error))
        }
      )
  }
}

function getAll() {
  return dispatch => {
    dispatch(ProRequest())
    productService.getAll()
      .then(
        users => dispatch(ProSuccess(users)),
        error => dispatch(ProError(error))
      )
  }
}

function getOne(price) {
  return dispatch => {
    dispatch(ProRequest())
    productService.getOne(price)
      .then(
        users => dispatch(ProSuccess(users)),
        error => dispatch(ProError(error))
      )
  }
}

export const processorAction = {
  getAll,
  processorAdd,
  getOne
}
