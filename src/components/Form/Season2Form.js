import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button , Select } from 'antd'
import { addDoctor } from '../../actions/doctor'
import '../../Assets/css/Season2Form.css'

const { Option } = Select;

class Season2Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'email' : values.email,
            'city' : values.city
        }
        console.log(data)
        // const { addDoctor } = this.props;
        // addDoctor(data);
      }
    });
  };

    handleCkChange = e => {
      this.props.form.setFieldsValue({
        city: e
       });
    }




  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;


    return (
      <>
        <Form onSubmit={this.handleSubmit} className="s1Div">
              <FormItem style={{marginRight:24}}>
                {getFieldDecorator('email', {
                  rules: [
                    {type: 'email', message: 'Enter a valid e-mail id!',}, 
                    {required: true, message: 'Please provide your e-mail id.',},
                    {max:50},
                  ],
                })(
                  <Input
                    placeholder='Email id'
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>
              <FormItem style={{marginRight:24}}>
                    {getFieldDecorator('city', {
                    initalValue:"mumbai",
                    valuePropName: 'option',
                    rules: [
                        {required: true},
                    ],
                    })(
                    <Select size='large' defaultValue="mumbai" 
                        onChange={this.handleCkChange.bind(this)} 
                    >
                        <Option value="mumbai">Mumbai</Option>
                        <Option value="banglore">Banglore</Option>
                        <Option value="chennai">Chennai</Option>
                    </Select>
                    )}
              </FormItem>

              <div className="">
                <Button size='large' className='s2-bkbtn'>Back</Button>
                <Button size='large' style={{marginRight:24}} className='s2-btn float-right'  htmlType="submit">Finish</Button>
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

const WrappedSeason2Form = Form.create()(Season2Form);
const ConnectedSeason2 = connect(null, mapDispatchToProps)(WrappedSeason2Form)

export default ConnectedSeason2