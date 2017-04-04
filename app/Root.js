//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Companies from '~/app/containers/pages/companies/Companies'
import NewCompany from '~/app/containers/pages/companies/NewCompany'
import Layout from '~/app/containers/pages/layout/Layout'
import store from '~/app/Store'
import './assets/styles/global.css'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)

render((
  
  <Provider store={store}>
    <MuiThemeProvider>
      <div style={{height: '100%'}}>
        <Router history={history}>
          <Redirect from='/' to='/companies' />
          <Route path='/' component={Layout}>
            <Route path='/companies' component={Companies} />
            <Route path='/companies/new' component={NewCompany} />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
  
), document.getElementById('root'))
