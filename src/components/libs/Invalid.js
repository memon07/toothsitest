import React from 'react'
import { Button } from 'antd'

import history from '../../history'

import '../../Assets/css/Invalid.css'

export default function Invalid() {
    const invBtn = () =>{
        history.push('/otp')
    }

    return (
        <>
            <div className="container text-center mt-5">
                <h3>Please Enter correct otp to gain access</h3>
                <Button onClick={invBtn} className="invalid__btn" size="large">Go to Otp page</Button>
            </div>
        </>
    )
}
