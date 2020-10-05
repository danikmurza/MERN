import updateProductList from './product-list'
import {authentication} from "./authentication.reducer";

const reducer = (state, action) => {
  return {
    productList: updateProductList(state, action),
    authentication: authentication(state, action)
  }
}

export default reducer
