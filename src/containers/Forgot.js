import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { 
    Form,
    Input,
    Button,
   } from 'antd';
import './Form.css';

import {signUp,login} from '../controller/Actions';

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 15,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

const Forgot = () => {

  const [form] = Form.useForm();
  const dispatch=useDispatch();
  const signUper= () =>{ dispatch(signUp());}
  const loginer= () =>{ dispatch(login());}
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="container-fluid nav-bg">
    <div className="row">
        <div className="col-10 col-md-8 col-lg-6  mx-auto mt-5 pt-5">
        <div className="row mt-1 mb-4">
                <div className="col-12"><Button className='nav-btn' type='ghost' danger onClick={loginer}>Login</Button>
            <Button type='ghost' className='nav-btn' danger onClick={signUper}>Sign Up</Button></div>
                </div>
            
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="Enter E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input allowClear/>
      </Form.Item>

      

      <Form.Item
        name="password"
        label="Set New Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password allowClear/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password allowClear/>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Update Password
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>
  );
}

export default Forgot
