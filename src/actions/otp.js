import * as actionTypes from '../actionTypes/otp'
import axios from 'axios'

import history from "../history"
import { success ,errorMsg} from '../components/libs/message'

export function addOtp(url,data) {
  return (dispatch) => {
    try {
        axios.post(url,data)
        .then(function (response) {
          if(response.data){
            console.log('data in action',response.data)
            dispatch(actionTypes.addOtp(response.data))
            if (response.data === 'true') {
              success('otp added sucessfully')
              history.push('/welcome')
            }else {
              errorMsg('wrong otp')
            }

          }
        })
        .catch(function (error) {
          return Promise.reject(error);
        });
    }catch(e){
      errorMsg(e)
    }
  }
}
