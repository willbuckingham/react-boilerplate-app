import { createReducer } from '@reduxjs/toolkit'

import * as actions from '../actions/app'

export default createReducer(
  {
    loading: false,
  },
  {
    [actions.initApp]: _ => ({
      ..._,
      loading: true,
    }),
    [actions.initAppSuccess]: _ => ({
      ..._,
      loading: false,
    }),
  }
)
