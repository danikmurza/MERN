import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import './components/css/css/theme.css'
import {App} from './components/app'
import ErrorBoundry from './components/error-boundry'
import {AuthContext} from './context/auth-context'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AuthContext.Provider value={"useAuth"}>
        <Router>
          <App/>
        </Router>
      </AuthContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)



