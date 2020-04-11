export const ADD_DOCTOR = 'ADD_DOCTOR'

export const addDoctor = (doctor) => {
    return {
        type : ADD_DOCTOR,
        doctor
    }
}
