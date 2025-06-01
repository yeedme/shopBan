import React, { useState } from 'react';
import { 
  Form, 
  Input, 
  Button, 
  Card, 
  Tabs, 
  message, 
  Checkbox,
  Divider
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  MailOutlined, 
  PhoneOutlined,
  GoogleOutlined,
  WechatOutlined,
  AlipayOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const nav=useNavigate();
  const onLogin = (values) => {
    setLoading(true);
    console.log('Login values:', values);
    setTimeout(() => {
      setLoading(false);
      messageApi.success('Login successful!');
      nav('/all/home')
    }, 1000);
  };

  const onRegister = (values) => {
    setLoading(true);
    console.log('Register values:', values);
    setTimeout(() => {
      setLoading(false);
      messageApi.success('Registration successful! Please login');
      setActiveTab('login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {contextHolder}
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Shopping System</h1>
          <p className="text-gray-600 mt-2">Please login or register to continue</p>
        </div>
        
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          centered
          className="mb-6"
        >
          <TabPane tab="Login" key="login">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onLogin}
              size="large"
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please enter your username!' }]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="Username" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="Password" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-between items-center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    Forgot password?
                  </a>
                </div>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-12 rounded-lg" 
                  loading={loading}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <Divider>Other Login Methods</Divider>
            <div className="flex justify-center space-x-4">
              <Button shape="circle" icon={<GoogleOutlined />} size="large" />
              <Button shape="circle" icon={<WechatOutlined />} size="large" />
              <Button shape="circle" icon={<AlipayOutlined />} size="large" />
            </div>
          </TabPane>
          
          <TabPane tab="Register" key="register">
            <Form
              name="register"
              onFinish={onRegister}
              size="large"
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please enter your username!' },
                  { min: 3, message: 'Username must be at least 3 characters!' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="Username" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email address!' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined className="text-gray-400" />} 
                  placeholder="Email" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: 'Please enter your phone number!' },
                  { pattern: /^1\d{10}$/, message: 'Please enter a valid phone number!' }
                ]}
              >
                <Input 
                  prefix={<PhoneOutlined className="text-gray-400" />} 
                  placeholder="Phone number" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="Password" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="Confirm password" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  { 
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Please agree to the terms and conditions'))
                  }
                ]}
              >
                <Checkbox>
                  I have read and agree to the <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-12 rounded-lg" 
                  loading={loading}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Login;