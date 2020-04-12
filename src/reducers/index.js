import { combineReducers } from 'redux'

import doctor from './doctor'
import patient from './patient'

export default combineReducers({
  doctor,
  patient
})
