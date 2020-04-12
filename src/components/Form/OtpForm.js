import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button } from 'antd'
import { addOtp } from '../../actions/otp'
import '../../Assets/css/otpForm.css'

class OtpForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    let docId = this.props.doctor ? this.props.doctor.doctor.id : 1
    let phoneNumber = this.props.doctor ? this.props.doctor.doctor.phonenumber : 9392312321

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'id' : docId,
            'phonenumber' : phoneNumber,
            'otp' : values.otp
        }
        console.log(data)
        const { addOtp } = this.props;
        let url = 'http://localhost:8000/api/otp'
        addOtp(url,data);
      }
    });
  };


  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;


    return (
      <>
        <Form onSubmit={this.handleSubmit} className="otpDiv">
              <FormItem style={{marginRight:24}}>
                {getFieldDecorator('otp', {
                  rules: [
                    {required: true, message: 'Please provide otp number.'},
                    {max:4}
                  ],
                })(
                  <Input
                    placeholder='4 digit otp'
                    type="number"
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>

              <Button size='large' className='otp-btn'  htmlType="submit">Verify</Button>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOtp: (url,data) => dispatch(addOtp(url,data))
  };
};

const mapStateToProps = state => {
  return {
    doctor : state.doctor
  }
}

const WrappedOtpForm = Form.create()(OtpForm);
const ConnectedOtp = connect(mapStateToProps, mapDispatchToProps)(WrappedOtpForm)

export default ConnectedOtp