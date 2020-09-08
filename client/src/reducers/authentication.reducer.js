export function authentication(state, action) {
  
  if (state === undefined) {
    return {
      loggedIn: false,
      user: null
    }
  }
  
  switch (action.type) {
    case 'USERS_LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      };
    case 'USERS_LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      };
    case 'USERS_LOGIN_FAILURE':
      return {};
    case 'USERS_LOGOUT':
      return {};
    default:
      return state.authentication
  }
}
