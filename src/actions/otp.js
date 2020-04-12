import * as actionTypes from '../actionTypes/otp'

import history from "../history"
import { success ,errorMsg} from '../components/libs/message'

export function addOtp(data) {
  return (dispatch) => {
    try {
        console.log('......',data)
        // dispatch(actionTypes.addOtp(data))
        success('added sucessfully')
        // history.push('/welcome')
    }catch(e){
      errorMsg(e)
    }
  }
}
