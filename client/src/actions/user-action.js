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


function myAccount(body, url) {
  return dispatch => {
    dispatch(request())
    
    userService.myAccount(body, url)
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

function avatar(body) {
  return dispatch => {
    dispatch(request())
    
    userService.uploadAvatar(body)
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
  document.location.reload()
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
  logout,
  getAll,
  myAccount,
  deleteUser,
  ticket,
  avatar
}
