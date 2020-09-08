export default function newsList(state, action) {
  
  if (state === undefined) {
    return {
      products: [],
      pending: true,
      error: null
    };
  }
  
  switch(action.type) {
    case 'FETCH_NEWS_REQUEST':
      return {
          products: [],
          pending: true,
          error: null
        }
    case 'FETCH_NEWS_SUCCESS':
      return {
          products: action.products,
          pending: false,
          error: null
        }
    case 'FETCH_NEWS_ERROR':
      return {
          products: [],
          pending: false,
          error: action.error
      }
    default:
      return state.newsList
  }
}

