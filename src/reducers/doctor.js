import * as ActionType from '../actionTypes/doctor';
import Immutable from 'immutable'

export const initialState = Immutable.fromJS(null)

export default function (state = initialState,action) {
    switch(action.type) {
    
        case ActionType.ADD_DOCTOR :
            return  {...state, doctor: action.doctor}
            
        
        default:
            return state
    }
}