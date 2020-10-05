function addProduct(name, brand, specification, price, count, img, type) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, brand, specification, price, count, img, type})
  }
  
  return fetch(`http://localhost:5000/api/product/add`, requestOptions)
    .then(handleResponse)
    .then(products => {
        // localStorage.setItem('user', JSON.stringify(user))
        return products
      }
    )
}

function addReview(_id, review) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id, review})
  }
  
  return fetch(`http://localhost:5000/api/product/review`, requestOptions)
    .then(handleResponse)
    .then(products => {
        // localStorage.setItem('user', JSON.stringify(user))
        return products
      }
    )
}


function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text)
      if (!response.ok) {
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }
    
      return data
    }
  )
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }
  return fetch(`http://localhost:5000/home`, requestOptions).then(handleResponse)
}

function getOne(price) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({price})
  }
  return fetch(`http://localhost:5000/api/processor/find`, requestOptions)
    .then(handleResponse)
}

export const productService = {
  addProduct,
  getAll,
  getOne,
  addReview
}
