import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { 
    Form,
    Input,
    Link,
    Button,
   } from 'antd';
import './Form.css';
import {signUp,setPassword} from '../controller/Actions';

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

const Login = () => {

  const [form] = Form.useForm();
  const dispatch=useDispatch();

  const signUper= () =>{ dispatch(signUp());}
  const setPassworder= () =>{ dispatch(setPassword());}
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="container-fluid nav-bg">
    <div className="row">
        <div className="col-10 col-md-8 col-lg-6  mx-auto mt-5 pt-5">
            <div className="row mt-1 mb-4">
                <div className="col-12"><Button className='nav-btn' type='ghost' danger onClick={signUper}>Sign Up</Button>
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
        label="E-mail"
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
        label="Password"
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
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      
    </Form>
    </div>
    </div>
    </div>
  );
}

export default Login
