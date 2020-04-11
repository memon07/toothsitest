import React from 'react'

import '../Assets/css/Login.css'
import DocAsset from '../../src/Assets/Images/doc-assets.svg'

//components
import Nav from './libs/nav'
import LoginForm from '../components/Form/LoginForm'

function Login (props) {

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
            <p className="loginHeader__p">Doctors Login</p>
            <p className="loginHeader__p">with mobile number</p>
          </div>
          <div className="col-12 padding24">
            <LoginForm/>
          </div>
        </div>
    </>
  )
}

export default Login
