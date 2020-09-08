import updateProductList from './product-list'
import updateShoppingCart from './shopping-cart'
import newsList from "./newsList"
import {authentication} from "./authentication.reducer";

const reducer = (state, action) => {
  return {
    productList: updateProductList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    newsList: newsList(state, action),
    authentication: authentication(state, action)
  }
}

export default reducer
