import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button , Select } from 'antd'
import history from '../../history'
import { updatePatient } from '../../actions/patient'
import '../../Assets/css/Season2Form.css'

const { Option } = Select;


class Season2Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    let latestArrId = this.props.patient?this.props.patient.arr[this.props.patient.arr.length -1].id:1;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
            'id' : latestArrId,
            'email' : values.email,
            'city' : values.city
        }

        console.log(this.props.patient.arr[this.props.patient.arr.length -1].id)
        console.log(data)
        const { updatePatient } = this.props;
        updatePatient(data);
      }
    });
  };

  handleCkChange = e => {
    this.props.form.setFieldsValue({
      city: e
      });
  }

  backBtn = () => {
    history.push('/season1')
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
                <Button size='large' onClick={this.backBtn.bind(this)} className='s2-bkbtn'>Back</Button>
                <Button size='large' style={{marginRight:24}} className='s2-btn float-right'  htmlType="submit">Finish</Button>
              </div>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatient: (data) => dispatch(updatePatient(data))
  };
};

const mapStateToProps = state => {
  return {
    patient : state.patient 
  }
}

const WrappedSeason2Form = Form.create()(Season2Form);
const ConnectedSeason2 = connect(mapStateToProps, mapDispatchToProps)(WrappedSeason2Form)

export default ConnectedSeason2