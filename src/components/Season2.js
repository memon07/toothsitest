import React from 'react'
import { connect } from 'react-redux'

import '../Assets/css/Season2.css'

//components
import Nav from './libs/nav'
import Season2Form from '../components/Form/Season2Form'
import Invalid from './libs/Invalid'

function Season2 (props) {

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
            <p className="s2Header__p">Need some more</p>
            <p className="s2Header__p">information</p>
          </div>
          <div className="col-12 padding24">
              <Season2Form/>
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

export default connect(mapStateToProps)(Season2)