import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Root from './containers/Root'
import configureStore from './store/configureStore'

injectTapEventPlugin()

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <MuiThemeProvider>
    <Root store={store} history={history} />
  </MuiThemeProvider>,
  document.getElementById('root')
)
