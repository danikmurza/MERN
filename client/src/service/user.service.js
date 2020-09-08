export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))
  
  if (user && user.token) {
    return {'Authorization': 'Bearer ' + user.token}
  } else {
    return {}
  }
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };
  
  return fetch(`http://localhost:5000/api/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))
      window.location.reload()
      
      return user
    })
}

function register(email, password, firstName, lastName, phoneNumber) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password, firstName, lastName, phoneNumber})
  }
  
  return fetch(`http://localhost:5000/api/auth/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))
      
      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  window.location.reload()
  
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  
  return fetch(`http://localhost:5000/api/auth/array`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    
    return data
  });
}

export const userService = {
  login,
  logout,
  getAll,
  register
}
