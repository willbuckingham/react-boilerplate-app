import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { ThemeProvider } from '@material-ui/core'

import routes from './config/routes'
import store from './config/store'
import theme from './config/theme'

export class App extends React.Component {
  render () {
    return (
      <ReduxProvider store={ store }>
        <ThemeProvider theme={ theme }>
          <Router>
            <Switch>
              { routes.map(({ path, exact, component }) =>
                <Route exact={ exact } path={ path } key={ path }>
                  { component }
                </Route>
              )}
            </Switch>
          </Router>
        </ThemeProvider>
      </ReduxProvider>
    )
  }
}

export default App
