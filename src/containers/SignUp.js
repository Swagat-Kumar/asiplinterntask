import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { 
    Form,
    Input,
    Checkbox,
    Button,
    message
   } from 'antd';
import './Form.css';

import {login,setPassword,addUserAndLogin} from '../controller/Actions';
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

const SignUp = () => {

  const [form] = Form.useForm();
  const dispatch=useDispatch();
  const users=useSelector(state=>state.users);
  const setPassworder= () =>{ dispatch(setPassword());}
  const loginer= () =>{ dispatch(login());}

  const onFinish = (values) => {
    for(var i=0;i<users.length;i++){
      if(users[i].email===values.email){
        message.error('User Already Exist');
        return;
      }
    }
    const newUser={email:values.email,password:values.password};
    dispatch(addUserAndLogin(users.concat(newUser)))
  };
  return (
    <div className="container-fluid nav-bg">
    <div className="row">
        <div className="col-10 col-md-8 col-lg-6  mx-auto mt-5 pt-5">
        <div className="row mt-1 mb-4">
                <div className="col-12"><Button className='nav-btn' type='ghost' danger onClick={loginer}>Login</Button>
            <Button type='ghost' className='nav-btn' danger onClick={setPassworder}>Set Password</Button></div>
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
        label="Set Password"
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


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should Accept Heisenberg\'s agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="https://www.facebook.com/swagatkumarrocky">Agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      
    </Form>
    </div>
    </div>
    </div>
  );
}

export default SignUp
