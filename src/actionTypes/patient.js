export const ADD_PATIENT = 'ADD_PATIENT'
export const UPDATE_PATIENT = 'UPDATE_PATIENT'

export const addPatient = (patient) => {
    return {
        type : ADD_PATIENT,
        patient
    }
}

export const updatePatient = (patient) => {
    return {
        type : UPDATE_PATIENT,
        patient
    }
}