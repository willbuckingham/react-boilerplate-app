import React from 'react'
import propTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
  // Typography,
  // Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Menu,
} from '@material-ui/icons'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    margin: spacing(2),
  },
}))

const Page = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <main className={classes.main}>
        { children }
      </main>
    </div>
  )
}

Page.propTypes = {
  children: propTypes.node.isRequired,
}

export default Page
