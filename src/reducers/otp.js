import * as ActionType from '../actionTypes/otp';


export default function (state = false,action) {
    switch(action.type) {
    
        case ActionType.ADD_OTP :
            console.log('---- otp',state,action.otp)
            return  {...state, otp: action.otp}
            
        
        default:
            return state
    }
}