export function authentication(state, action) {
  
  if (state === undefined) {
    return {
      loggedIn: false,
      user: [],
      error: null,
      errorBool: false
    }
  }
  
  switch (action.type) {
    case 'USERS_LOGIN_REQUEST':
      return {
        loggingIn: false,
        user: [],
        error: null,
        errorBool: false
      };
    case 'USERS_LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user,
        error: null,
        errorBool: false
      };
    case 'USERS_LOGIN_FAILURE':
      return {
        loggedIn: false,
        user: [],
        error: action.error,
        errorBool: true
      };
    case 'USERS_LOGOUT':
      return {};
    default:
      return state.authentication
  }
}
