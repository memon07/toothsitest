export const ADD_DOCTOR = 'ADD_DOCTOR'

export const addMovies = (doctor) => {
    return {
        type : ADD_DOCTOR,
        doctor
    }
}
