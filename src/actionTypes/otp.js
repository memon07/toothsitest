export const ADD_OTP = 'ADD_OTP'

export const addPatient = (otp) => {
    return {
        type : ADD_OTP,
        otp
    }
}