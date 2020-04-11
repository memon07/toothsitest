import React from 'react'

import '../Assets/css/Welcome.css'
import DocAsset from '../../src/Assets/Images/doc-assets.svg'
import BookSession from '../../src/Assets/Images/book_session.png'

import { Button } from 'antd'

//components
import Nav from './libs/nav'

function Welcome (props) {

  return (
    <>
        <div className="row m-0">
          <div className="col-12 p-0">
            <Nav/>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-12 welBorder__right p-0">
            <div className="col-12 padding24">
                <p className="welHeader__p">Welcome Doctor,</p>
            </div>
            <div className="col-12 padding24 text-center">
                <img src={DocAsset} width="133px" height="193px" alt="doc-asset"/>
                <p className="welBody__p">Look like you are yet to refer someone for smile correction</p>
                <Button size='large' className='wel-btn'  htmlType="submit">Book a session for patient</Button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-12 p-0">
            <div className="col-12 padding24">
                <p className="welHITWHeader__p">How it works?</p>
            </div>

            {/* 1 */}
            <div className="row m-0 padding24 welHIW__div" style={{paddingBottom:26}}>
                <div className="col-md-3 col-3">
                    <img src={BookSession} alt="book-session"/>
                </div>
                <div className="col-md-9 col-9">
                    <p className="welHIW__p ml-3">Book a smile check for your patients book with your reference links</p>
                </div>
            </div>

            {/* 2 */}
            <div className="row m-0 padding24" style={{paddingBottom:26}}>
                <div className="col-md-7 col-7">
                    <p className="welHIW__p">Book a smile check for your patients book with your reference code</p>
                </div>
                <div className="col-md-5 col-5">
                    <img src={BookSession} alt="book-session"/>
                </div>
            </div>

            {/* 3 */}
            <div className="row m-0 padding24 welHIW__div" style={{paddingBottom:26}}>
                <div className="col-md-3 col-3">
                    <img src={BookSession} alt="book-session"/>
                </div>
                <div className="col-md-9 col-9">
                    <p className="welHIW__p ml-3">Book a smile check for your patients book with your reference links</p>
                </div>
            </div>

            {/* 4 */}
            <div className="row m-0 padding24" style={{paddingBottom:26}}>
                <div className="col-md-7 col-7">
                    <p className="welHIW__p">Book a smile check for your patients book with your reference code</p>
                </div>
                <div className="col-md-5 col-5">
                    <img src={BookSession} alt="book-session"/>
                </div>
            </div>

            {/* 5 */}
            <div className="row m-0 padding24 welHIW__div" style={{paddingBottom:26}}>
                <div className="col-md-3 col-3">
                    <img src={BookSession} alt="book-session"/>
                </div>
                <div className="col-md-9 col-9">
                    <p className="welHIW__p ml-3">Book a smile check for your patients book with your reference links</p>
                </div>
            </div>


          </div>
        </div>
    </>
  )
}

export default Welcome
