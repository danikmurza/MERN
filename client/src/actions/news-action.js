export function fetchNewsPending() {
  return {
    type: 'FETCH_NEWS_REQUEST'
  }
}

export function fetchNewsSuccess(news) {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    products: news
  }
}

export function fetchNewsError(error) {
  return {
    type: 'FETCH_NEWS_ERROR',
    products: error
  }
}

export function fetchNews() {
  return async dispatch => {
    dispatch(fetchNewsPending())
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=759652119d0a41f8acc1c5b07ad5263a')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error)
        }
        // console.log(res)
        dispatch(fetchNewsSuccess(res.articles))
        return res
      })
      .catch(error => {
        dispatch(fetchNewsError(error));
      })
  }
}
