import React, { useState } from 'react';
import { 
  List, 
  Button, 
  InputNumber, 
  Badge, 
  Drawer, 
  Avatar, 
  Empty, 
  Form,
  Input,
  Space,
  Steps,
  message,
  Divider,
  Radio
} from 'antd';
import { DeleteOutlined, ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { TextArea } = Input;

const ShoppingCart = ({ 
  visible, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveFromCart,
  onClearCart,
  setIsCartVisible,
  submitsucessful
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('alipay');
  const [form] = Form.useForm();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const values = await form.validateFields();
      // Handle checkout logic, such as sending to backend API
      console.log('Order Information:', {
        orderItems: cartItems,
        deliveryInfo: values,
        totalAmount: total
      });
      message.success({
        content: 'Order placed successfully!',
        duration: 3,
        style: {
          marginTop: '20vh',
        },
      });
      submitsucessful();
      // Clear shopping cart
      onClearCart();
      
      // Reset form and steps
      form.resetFields();
      setCurrentStep(0);
      
      // Close drawer
      setIsCartVisible(false);
      
    } catch (error) {
      message.error('Please fill in complete delivery information');
    }
  };

  const CartList = () => (
    <>
      {cartItems.length === 0 ? (
        <Empty description="Your cart is empty" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => onRemoveFromCart(item.id)}
                />
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar shape="square" size={64} src={item.image} />}
                title={item.name}
                description={`$${item.price}`}
              />
              <div className="flex items-center">
                <InputNumber
                  min={1}
                  max={item.stock}
                  value={item.quantity}
                  onChange={(value) => onUpdateQuantity(item.id, value)}
                />
              </div>
            </List.Item>
          )}
        />
      )}
    </>
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
          Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </div>
        <div className="text-xl text-red-500 font-bold">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </Form>
  );

  const drawerTitle = (
    <div className="flex items-center">
      {currentStep === 1 && (
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => setCurrentStep(0)}
          style={{ marginRight: '8px' }}
        />
      )}
      {currentStep === 0 ? 'Shopping Cart' : 'Confirm Order'}
    </div>
  );

  return (
    <Drawer
      title={drawerTitle}
      placement="right"
      onClose={onClose}
      open={visible}
      width={500}
      extra={
        currentStep === 0 && (
          <div className="text-lg font-bold">
            Total: ${total.toFixed(2)}
          </div>
        )
      }
    >
      <Steps current={currentStep} className="mb-8">
        <Step title="Cart" />
        <Step title="Checkout" />
      </Steps>

      {currentStep === 0 ? <CartList /> : <CheckoutForm />}

      {cartItems.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          {currentStep === 0 ? (
            <Button 
              type="primary" 
              block 
              size="large"
              onClick={() => setCurrentStep(1)}
            >
              Checkout ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </Button>
          ) : (
            <Space direction="vertical" style={{ width: '100%' }}>
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
              <Button 
                type="primary" 
                block 
                size="large"
                onClick={handleCheckout}
              >
                Place Order
              </Button>
            </Space>
          )}
        </div>
      )}
    </Drawer>
  );
};

export default ShoppingCart; 