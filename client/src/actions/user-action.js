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

function register(email, password, firstName, lastName, phoneNumber) {
  return dispatch => {
    dispatch(request({email}))
    
    userService.register(email, password, firstName, lastName, phoneNumber)
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


export const userAction = {
  login,
  logout,
  getAll,
  register
}
