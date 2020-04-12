export const ADD_OTP = 'ADD_OTP'

export const addOtp = (otp) => {
    return {
        type : ADD_OTP,
        otp
    }
}