export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))
  
  if (user && user.token) {
    return {'Authorization': 'Bearer ' + user.token}
  } else {
    return {}
  }
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text)
      if (!response.ok) {
        if (response.status === 401) {
          logout()
        }
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }
      return data
    }
  )
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  }
  
  return fetch(`http://localhost:5000/api/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        return user
      }
    )
}

function register(email, password, firstName, lastName, phoneNumber, jwtQuestion, jwtSecret) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      jwtQuestion,
      jwtSecret
    })
  }
  
  return fetch(`http://localhost:5000/api/auth/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // localStorage.setItem('user', JSON.stringify(user))
        return user
      }
    )
}

function uploadAvatar(data) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data
  }
  
  return fetch(`http://localhost:5000/api/auth/upload`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // localStorage.setItem('user', JSON.stringify(user))
        return user
      }
    )
}

function updateProfile(_id, firstName, lastName, password, phoneNumber) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id, firstName, lastName, password, phoneNumber})
  }
  
  return fetch(`http://localhost:5000/api/auth/update`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        return user
      }
    )
}

function logout() {
  localStorage.removeItem('user')
  window.location.reload()
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`http://localhost:5000/api/auth/array`, requestOptions).then(handleResponse)
}


async function deleteUser(_id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id})
  }
  
  return await fetch(`http://localhost:5000/api/auth/user`, requestOptions)
    .then(handleResponse)
    .then(user => {
        return user
      }
    )
}

const address = async (_id, address, action) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id, address, action})
  }
  
  return await fetch(`http://localhost:5000/api/auth/address`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        return user
      }
    )
}

const orders = async (_id, orders) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id, orders})
  }
  
  return await fetch(`http://localhost:5000/api/auth/orders`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        return user
      }
    )
}
const tickets = async (userId, subject, type, priority, description, status) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId, subject, type, priority, description, status})
  }
  
  return await fetch(`http://localhost:5000/api/ticket`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        return user
      }
    )
}


export const userService = {
  login,
  logout,
  getAll,
  register,
  deleteUser,
  updateProfile,
  address,
  orders,
  tickets,
  uploadAvatar
}
