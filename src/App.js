import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './pages/Home/Home.css'

export class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
