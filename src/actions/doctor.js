import * as actionTypes from '../actionTypes/doctor'

import { success ,errorMsg} from '../components/message'

export function addDoctor(data) {
  return (dispatch) => {
    try {
        dispatch(actionTypes.addDoctor(data))
        success('added sucessfulyy')
    }catch(e){
      errorMsg(e)
    }
  }
}
