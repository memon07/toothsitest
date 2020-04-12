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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'otp' : values.otp
        }
        console.log(data)
        const { addOtp } = this.props;
        addOtp(data);
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
    addOtp: (data) => dispatch(addOtp(data))
  };
};

const WrappedOtpForm = Form.create()(OtpForm);
const ConnectedOtp = connect(null, mapDispatchToProps)(WrappedOtpForm)

export default ConnectedOtp