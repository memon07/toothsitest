import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button ,Checkbox } from 'antd'
import uuid from "uuid/v4";
import { addPatient } from '../../actions/patient'
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
            'id': uuid(),
            'phonenumber' : values.phonenumber,
            'patientname' : values.patientname,
            'notification' : values.notification
        }
        console.log(data)
        const { addPatient } = this.props;
        addPatient(data);
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

              <div className="s1-flex__div"style={{marginRight:24}}>
                <FormItem>
                        {getFieldDecorator('notification', {
                        initalValue:false,
                        valuePropName: "checked",
                        rules: [
                            {required: false},
                        ],
                        })(
                        <><Checkbox onChange={this.handleCkChange.bind(this)}/><span className="s1-notification">Allow notification</span></>
                        )}
                </FormItem>
                <Button size='large' className='s1-btn pull-right'  htmlType="submit">Next</Button>
              </div>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPatient: (data) => dispatch(addPatient(data))
  };
};

const WrappedSeason1Form = Form.create()(Season1Form);
const ConnectedSeason1 = connect(null, mapDispatchToProps)(WrappedSeason1Form)

export default ConnectedSeason1