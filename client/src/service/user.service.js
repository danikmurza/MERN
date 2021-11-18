const _base = "http://localhost:5000/api"

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

const  myAccount = (body, url) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }
  
  return fetch(`${_base}/auth/${url}`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
         window.location.reload()
        return user
      }
    )
}

const  recovery = (email) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    }

    return fetch(`${_base}/auth/recovery`, requestOptions)
        .then(handleResponse)
        .then(user => {

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
  
  return await fetch(`${_base}/ticket`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload()
        return user
      }
    )
}

function uploadAvatar(body) {
  const requestOptions = {
    method: 'POST',
    body: body
  }
  
  return fetch(`${_base}/auth/upload`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
      window.location.reload()
        return user
      }
    )
}


function logout() {
  localStorage.removeItem('user')
  window.location.reload()
}

async function deleteUser(_id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id})
  }
  
  return await fetch(`${_base}/auth/user`, requestOptions)
    .then(handleResponse)
    .then(user => {
        return user
      }
    )
}

export const userService = {
  logout,
  myAccount,
  deleteUser,
  tickets,
  uploadAvatar,
    recovery
}
