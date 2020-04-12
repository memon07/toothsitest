import React from 'react'
import { connect } from 'react-redux'

import '../Assets/css/Otp.css'
import DocAsset from '../../src/Assets/Images/doc-assets.svg'

//components
import Nav from './libs/nav'
import OtpForm from '../components/Form/OtpForm'

function Otp (props) {

  let doctorNo = props.doctor ? props.doctor.doctor.phonenumber : 9912121232

  return (
    <>
        <div className="row m-0">
          <div className="col-12 p-0">
            <Nav/>
          </div>
          <div className="col-12 padding24 text-center">
            <img src={DocAsset} width="133px" height="193px" alt="doc-asset"/>
          </div>
          <div className="col-12 padding24">
            <p className="otpHeader__p">Please verify OTP</p>
            <p className="otpHeader__p">send to {doctorNo}</p>
          </div>
          <div className="col-12 padding24">
            <OtpForm/>
          </div>
        </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    doctor : state.doctor
  }
}

export default connect(mapStateToProps)(Otp)