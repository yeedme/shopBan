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

const { TabPane } = Tabs;

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const onLogin = (values) => {
    setLoading(true);
    console.log('Login values:', values);
    setTimeout(() => {
      setLoading(false);
      messageApi.success('登录成功！');
    }, 1000);
  };

  const onRegister = (values) => {
    setLoading(true);
    console.log('Register values:', values);
    setTimeout(() => {
      setLoading(false);
      messageApi.success('注册成功！请登录');
      setActiveTab('login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {contextHolder}
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">欢迎使用购物系统</h1>
          <p className="text-gray-600 mt-2">请登录或注册以继续</p>
        </div>
        
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          centered
          className="mb-6"
        >
          <TabPane tab="登录" key="login">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onLogin}
              size="large"
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="用户名" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="密码" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-between items-center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  <a className="text-blue-500 hover:text-blue-700" href="#">
                    忘记密码？
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
                  登录
                </Button>
              </Form.Item>
            </Form>

            <Divider>其他登录方式</Divider>
            <div className="flex justify-center space-x-4">
              <Button shape="circle" icon={<GoogleOutlined />} size="large" />
              <Button shape="circle" icon={<WechatOutlined />} size="large" />
              <Button shape="circle" icon={<AlipayOutlined />} size="large" />
            </div>
          </TabPane>
          
          <TabPane tab="注册" key="register">
            <Form
              name="register"
              onFinish={onRegister}
              size="large"
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: '请输入用户名!' },
                  { min: 3, message: '用户名至少3个字符!' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="用户名" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: '请输入邮箱!' },
                  { type: 'email', message: '请输入有效的邮箱地址!' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined className="text-gray-400" />} 
                  placeholder="邮箱" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: '请输入手机号!' },
                  { pattern: /^1\d{10}$/, message: '请输入有效的手机号码!' }
                ]}
              >
                <Input 
                  prefix={<PhoneOutlined className="text-gray-400" />} 
                  placeholder="手机号" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '请输入密码!' },
                  { min: 6, message: '密码至少6个字符!' }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="密码" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[
                  { required: true, message: '请确认密码!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致!'));
                    },
                  }),
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="确认密码" 
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  { 
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('请同意用户协议'))
                  }
                ]}
              >
                <Checkbox>
                  我已阅读并同意 <a href="#" className="text-blue-500">用户协议</a> 和 <a href="#" className="text-blue-500">隐私政策</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-12 rounded-lg" 
                  loading={loading}
                >
                  注册
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
