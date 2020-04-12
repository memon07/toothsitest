import * as ActionType from '../actionTypes/otp';


export default function (state = false,action) {
    switch(action.type) {
    
        case ActionType.ADD_OTP :
            return  {...state, otp: action.otp}
                   
        default:
            return state
    }
}