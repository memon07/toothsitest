import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button } from 'antd'
import uuid from "uuid/v4";
import { addDoctor } from '../../actions/doctor'
import '../../Assets/css/loginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'id': uuid(),
            'phonenumber' : values.phonenumber
        }
        console.log(data)
        const { addDoctor } = this.props;
        addDoctor(data);
      }
    });
  };


  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;


    return (
      <>
        <Form onSubmit={this.handleSubmit} className="formDiv">
              <FormItem style={{marginRight:24}}>
                {getFieldDecorator('phonenumber', {
                  rules: [
                    {required: true, message: 'Please provide your phone number.'},
                    {max:10}
                  ],
                })(
                  <Input
                    placeholder='Mobile number'
                    type="number"
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>

              <Button size='large' className='login-btn'  htmlType="submit">Send OTP</Button>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDoctor: (data) => dispatch(addDoctor(data))
  };
};

const WrappedLoginForm = Form.create()(LoginForm);
const ConnectedLogin = connect(null, mapDispatchToProps)(WrappedLoginForm)

export default ConnectedLogin