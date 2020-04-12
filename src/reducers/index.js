import { combineReducers } from 'redux'

import doctor from './doctor'
import patient from './patient'
import otp from './otp'

export default combineReducers({
  doctor,
  patient,
  otp
})
