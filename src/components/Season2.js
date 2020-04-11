import React from 'react'

import '../Assets/css/Season2.css'

//components
import Nav from './libs/nav'
import Season2Form from '../components/Form/Season2Form'

function Season2 (props) {

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

export default Season2