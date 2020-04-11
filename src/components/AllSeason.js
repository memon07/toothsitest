import React from 'react'

import '../Assets/css/AllSeason.css'
import DocAsset from '../../src/Assets/Images/doc-assets.svg'

import { Button } from 'antd'

//components
import Nav from './libs/nav'

function AllSeason (props) {

  return (
    <>
        <div className="row m-0">
          <div className="col-12 p-0">
            <Nav/>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-12 p-0">
            <div className="col-12 padding24">
                <p className="allHeader__p">Hello Doctor,</p>
                <p className="allDesp__p">You have referred 10 sessions total</p>
            </div>
            <div className="col-12 padding24 text-center">
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-12 p-0">
            <div className="col-12 padding24">
                <p className="allPHeader__p">How it works?</p>
            </div>

          </div>
        </div>
    </>
  )
}

export default AllSeason
