import {userService} from '../service/user.service'

function request(user) {
  return {
    type: 'USERS_LOGIN_REQUEST',
    user
  }
}

function success(user) {
  return {
    type: 'USERS_LOGIN_SUCCESS',
    user
  }
}

function failure(error) {
  return {
    type: 'USERS_LOGIN_FAILURE',
    error
  }
}


function login(email, password) {
  return dispatch => {
    dispatch(request({email}))
    
    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

function register(email, password, firstName, lastName, phoneNumber, jwtQuestion, jwtSecret) {
  return dispatch => {
    dispatch(request({email}))
    
    userService.register(email, password, firstName, lastName, phoneNumber, jwtQuestion, jwtSecret)
      .then(
        user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

function avatar(data) {
  return dispatch => {
    dispatch(request())
    
    userService.uploadAvatar(data)
      .then(
        user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

function updateProfile(_id, firstName, lastName, password, phoneNumber) {
  return dispatch => {
    dispatch(request({_id}))
    
    userService.updateProfile(_id, firstName, lastName, password, phoneNumber)
      .then(
        user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

const address = (_id, address, action) => {
  return async dispatch => {
    dispatch(request(_id))
    
    await userService.address(_id, address, action)
      .then(user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

const orders = (_id, orders) => {
  return async dispatch => {
    dispatch(request(_id))
    
    await userService.orders(_id, orders)
      .then(user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

const ticket = (userId, subject, type, priority, description, status) => {
  return async dispatch => {
    dispatch(request(userId))
    
    await userService.tickets(userId, subject, type, priority, description, status)
      .then(user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

function logout() {
  userService.logout()
  return {
    type: 'USERS_LOGOUT'
  }
}

function getAll() {
  return dispatch => {
    dispatch(request())
    
    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }
}

function deleteUser(_id) {
  return dispatch => {
    dispatch(request({_id}))
    
    userService.deleteUser(_id)
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }
}


export const userAction = {
  login,
  logout,
  getAll,
  register,
  deleteUser,
  updateProfile,
  address,
  orders,
  ticket,
  avatar
}
