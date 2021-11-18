const _base = "http://localhost:5000/api/product"

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

const product = (body) => {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }
  
  return fetch(_base, requestOptions)
    .then(handleResponse)
    .then(products => {
        return products
      }
    )
}

function getAll() {
  const requestOptions = {
    method: 'GET',
      mode: 'no-cors',
    headers: {'Content-Type': 'application/json'}
  }
  return fetch("http://localhost:5000/api/product/", requestOptions)
    .then(handleResponse)
    .then(products => {
        return products
      }
    )
}

export const productService = {
  product,
  getAll
}
