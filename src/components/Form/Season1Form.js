import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button ,Checkbox } from 'antd'
import { addDoctor } from '../../actions/doctor'
import '../../Assets/css/Season1Form.css'


class Season1Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'phonenumber' : values.phonenumber,
            'patientname' : values.patientname,
            'notification' : values.notification
        }
        console.log(data)
        // const { addDoctor } = this.props;
        // addDoctor(data);
      }
    });
  };

  handleCkChange = e => {
      this.props.form.setFieldsValue({
            notification: e.target.checked
        });
  }


  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;


    return (
      <>
        <Form onSubmit={this.handleSubmit} className="s1Div">
                <FormItem style={{marginRight:24}}>
                    {getFieldDecorator('patientname', {
                    rules: [
                        {required: true, message: 'Please provide your name.'},
                        {max:10}
                    ],
                    })(
                    <Input
                        placeholder='Patient name'
                        size='large'
                        className='mb-3'
                    />
                    )}
              </FormItem>
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

              <div className="s1-flex__div">
                <FormItem style={{marginRight:24}}>
                        {getFieldDecorator('notification', {
                        initalValue:false,
                        valuePropName: "checked",
                        rules: [
                            {required: true},
                        ],
                        })(
                        <><Checkbox onChange={this.handleCkChange.bind(this)}/><span className="s1-notification">Allow notification</span></>
                        )}
                </FormItem>
                <Button size='large' className='s1-btn'  htmlType="submit">Send OTP</Button>
              </div>
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

const WrappedSeason1Form = Form.create()(Season1Form);
const ConnectedSeason1 = connect(null, mapDispatchToProps)(WrappedSeason1Form)

export default ConnectedSeason1