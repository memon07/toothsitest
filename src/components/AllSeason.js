import React from 'react'
import { connect } from 'react-redux'

import '../Assets/css/AllSeason.css'
import PatientsImg from '../../src/Assets/Images/patients.svg'
import PhoneImg from '../../src/Assets/Images/Phone.svg'

import { Button } from 'antd'

//components
import Nav from './libs/nav'

function AllSeason (props) {

  let patients = props.patient ? props.patient.arr : []
  console.log(patients)

  return (
    <>
        <div className="row m-0">
          <div className="col-12 p-0">
            <Nav/>
          </div>
          {/*  */}
          <div className="col-lg-6 col-md-6 col-xs-12 col-12">
            <div className="col-12 padding24">
                <p className="allHeader__p">Hello Doctor,</p>
                <p className="allDesp__p">You have referred 10 sessions total</p>
            </div>
            <div className="col-12 padding24">

              <div className="row patient__div p-0">
                <div className="col-2 p-0">
                  <img src={PatientsImg} height="40px" width="40px" alt="patient"/>
                </div>
                <div className="col-10 p-0">
                  <p className="p__name">Milan Roy</p>
                  <p className="p__date">Session on: 13 Mar 2020</p>
                  <p className="p__scheduled"><span style={{backgroundColor: '#FADFE2'}}>Scheduled</span></p>
                  <img src={PhoneImg} height="20px" width="20px" className="p__phoneImg" alt="phone"/>
                </div>
              </div>

              {
                patients.map(item => (
                  <div className="row patient__div p-0" key={item.id}>
                    <div className="col-2 p-0">
                      <img src={PatientsImg} height="40px" width="40px" alt="patient"/>
                    </div>
                    <div className="col-10 p-0">
                      <p className="p__name">{item.patientname}</p>
                      <p className="p__date">Session on: 13 Mar 2020</p>
                      <p className="p__scheduled"><span style={{backgroundColor: '#FADFE2'}}>Scheduled</span></p>
                      <img src={PhoneImg} height="20px" width="20px" className="p__phoneImg" alt="phone"/>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>

          {/*  */}
          <div className="col-lg-6 col-md-6 col-xs-12 col-12">
            <div className="col-12 padding24 pAllSHeader__div">
                <p className="pAllSHeader__p">PAST SESSION</p>
            </div>
            <div className="col-12 padding24">
            <div className="row patientAll__div p-0">
                <div className="col-2 p-0">
                  <img src={PatientsImg} height="40px" width="40px" alt="patient"/>
                </div>
                <div className="col-10 p-0">
                  <p className="p__name">Milan Roy</p>
                  <p className="p__date">Session on: 13 Mar 2020</p>
                  <p className="p__scheduled"><span style={{backgroundColor: '#FADFE2'}}>Scheduled</span></p>
                  <img src={PhoneImg} height="20px" width="20px" className="p__phoneImg" alt="phone"/>
                </div>
              </div>
              <div className="row patientAll__div p-0">
                <div className="col-2 p-0">
                  <img src={PatientsImg} height="40px" width="40px" alt="patient"/>
                </div>
                <div className="col-10 p-0">
                  <p className="p__name">Milan Roy</p>
                  <p className="p__date">Session on: 13 Mar 2020</p>
                  <p className="p__scheduled"><span style={{backgroundColor: '#FADFE2'}}>Scheduled</span></p>
                  <img src={PhoneImg} height="20px" width="20px" className="p__phoneImg" alt="phone"/>
                </div>
              </div>
              <div className="row patientAll__div p-0">
                <div className="col-2 p-0">
                  <img src={PatientsImg} height="40px" width="40px" alt="patient"/>
                </div>
                <div className="col-10 p-0">
                  <p className="p__name">Milan Roy</p>
                  <p className="p__date">Session on: 13 Mar 2020</p>
                  <p className="p__scheduled"><span style={{backgroundColor: '#FADFE2'}}>Scheduled</span></p>
                  <img src={PhoneImg} height="20px" width="20px" className="p__phoneImg" alt="phone"/>
                </div>
              </div>
              </div>

          </div>
        </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    patient: state.patient
  }
}

export default connect(mapStateToProps)(AllSeason)
