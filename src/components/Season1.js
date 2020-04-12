import React from 'react'
import { connect } from 'react-redux'

import '../Assets/css/Season1.css'

//components
import Nav from './libs/nav'
import Season1Form from '../components/Form/Season1Form'
import Invalid from './libs/Invalid'

function Season1 (props) {

  let isOtp = props.otp ? props.otp.otp : false

    if(!isOtp || isOtp === null || isOtp === undefined) {
        return <>
            <Invalid/>
        </>
    }

  return (
    <>
        <div className="row m-0">
          <div className="col-12 p-0">
            <Nav/>
          </div>
          <div className="col-12 padding24">
            <p className="s1Header__p">Book a free smile</p>
            <p className="s1Header__p">check for patient</p>
          </div>
          <div className="col-12 padding24">
              <Season1Form/>
          </div>
        </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
      otp : state.otp
  }
}

export default connect(mapStateToProps)(Season1)