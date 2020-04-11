import * as actionTypes from '../actionTypes/doctor'

import history from "../history"
import { success ,errorMsg} from '../components/libs/message'

export function addDoctor(data) {
  return (dispatch) => {
    try {
        dispatch(actionTypes.addDoctor(data))
        success('added sucessfully')
        history.push('/otp')
    }catch(e){
      errorMsg(e)
    }
  }
}
