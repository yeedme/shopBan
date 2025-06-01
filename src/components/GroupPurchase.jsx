import React, { useState, useEffect } from 'react';
import { Modal, Button, List, Avatar, Progress, Form, Input, Radio, Space, message, Divider } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const GroupPurchase = ({ product, onClose, onComplete }) => {
  const [groupMembers, setGroupMembers] = useState([
    { id: 1, name: 'User 1', url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.MqovI15z6O3xqrbcjHUm4gAAAA?rs=1&pid=ImgDetMain", joinedAt: new Date(Date.now() - 3600000) },
    { id: 2, name: 'User 2', url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.MqovI15z6O3xqrbcjHUm4gAAAA?rs=1&pid=ImgDetMain", joinedAt: new Date(Date.now() - 1800000) }
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('alipay');
  const [form] = Form.useForm();

  const getTimeSinceJoin = (joinTime) => {
    const now = new Date();
    const diff = now - joinTime;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleJoinGroup = () => {
    const newMember = {
      id: 3,
      name: 'You',
      url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.MqovI15z6O3xqrbcjHUm4gAAAA?rs=1&pid=ImgDetMain",
      joinedAt: new Date(),
      timeSinceJoin: '0:00'
    };
    setGroupMembers([...groupMembers, newMember]);
    message.success('Successfully joined the group!');
    setCurrentStep(1); // Move to checkout step
  };

  const handleCheckout = async () => {
    try {
      const values = await form.validateFields();
      // Handle checkout logic
      console.log('Group Purchase Order Information:', {
        product,
        deliveryInfo: values,
        groupMembers,
        totalAmount: product.price
      });
      message.success('Group purchase order placed successfully!');
      onComplete();
    } catch (error) {
      message.error('Please fill in complete delivery information');
    }
  };

  const GroupInfo = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-red-500 font-bold">${product.price}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <Progress 
          percent={(groupMembers.length / 3) * 100} 
          format={() => `${groupMembers.length}/3 members`}
          status={groupMembers.length >= 3 ? "success" : "active"}
        />
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Group Members:</h4>
        <List
          dataSource={groupMembers}
          renderItem={(member) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={member.url}>{member.name[0]}</Avatar>}
                title={member.name}
                description={
                  <div>
                    <div className="text-blue-500">Time in group: {member.timeSinceJoin || getTimeSinceJoin(member.joinedAt)}</div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );

  const CheckoutForm = () => (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="name"
        label="Recipient Name"
        rules={[{ required: true, message: 'Please enter recipient name' }]}
      >
        <Input placeholder="Enter recipient name" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Contact Phone"
        rules={[
          { required: true, message: 'Please enter contact phone' },
          { pattern: /^1[3-9]\d{9}$/, message: 'Please enter a valid phone number' }
        ]}
      >
        <Input placeholder="Enter contact phone" />
      </Form.Item>

      <Form.Item
        name="address"
        label="Delivery Address"
        rules={[{ required: true, message: 'Please enter detailed delivery address' }]}
      >
        <TextArea
          placeholder="Enter detailed delivery address"
          autoSize={{ minRows: 2, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item
        name="remark"
        label="Order Notes"
      >
        <TextArea
          placeholder="Enter order notes (optional)"
          autoSize={{ minRows: 2, maxRows: 4 }}
        />
      </Form.Item>

      <Divider />

      <div className="text-right mb-4">
        <div className="text-lg mb-2">
          Group Members: {groupMembers.length}/3
        </div>
        <div className="text-xl text-red-500 font-bold">
          Total: ${product.price}
        </div>
      </div>

      <Radio.Group 
        value={paymentMethod} 
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ marginBottom: '16px', width: '100%' }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Radio value="alipay">Alipay</Radio>
          <Radio value="wechatPay">WeChat Pay</Radio>
          <Radio value="paypal">PayPal</Radio>
        </Space>
      </Radio.Group>
    </Form>
  );

  return (
    <Modal
      title={currentStep === 0 ? "Group Purchase" : "Group Purchase Checkout"}
      open={true}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        currentStep === 0 ? (
          <Button 
            key="join" 
            type="primary" 
            onClick={handleJoinGroup}
            disabled={groupMembers.length >= 3}
          >
            Join Group
          </Button>
        ) : (
          <Button 
            key="checkout" 
            type="primary" 
            onClick={handleCheckout}
          >
            Place Order
          </Button>
        )
      ]}
    >
      {currentStep === 0 ? <GroupInfo /> : <CheckoutForm />}
    </Modal>
  );
};

export default GroupPurchase; 