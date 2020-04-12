import * as actionTypes from '../actionTypes/patient'

import history from "../history"
import { success ,errorMsg} from '../components/libs/message'

export function addPatient(data) {
  return (dispatch) => {
    try {
        console.log('......',data)
        dispatch(actionTypes.addPatient(data))
        success('added sucessfully')
        // history.push('/otp')
    }catch(e){
      errorMsg(e)
    }
  }
}

export function updatePatient(data) {
  return (dispatch) => {
    try {
        console.log('......',data)
        dispatch(actionTypes.updatePatient(data))
        success('added sucessfully')
        // history.push('/otp')
    }catch(e){
      errorMsg(e)
    }
  }
}