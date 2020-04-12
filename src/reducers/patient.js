import Immutable from 'immutable';
import * as ActionType from '../actionTypes/patient';

export const initialState = Immutable.fromJS(null)

const initialPatientState = {
    arr:[]
}

export default function (state = initialPatientState ,action) {
    switch(action.type) {
    
        case ActionType.ADD_PATIENT :
            return  {
                ...state,
                arr: [...state.arr, action.patient]
            }
        case ActionType.UPDATE_PATIENT : 
            console.log('+++',state.arr.map(
                (item) => item.id === action.patient.id ? item  : 'noooooooo'
            ))
            return {
                ...state,
                arr : state.arr.map(
                    item => item.id === action.patient.id ? 
                    { ...item,  ...action.patient } : item
                )
            }
            
        default:
            return state
    }
}