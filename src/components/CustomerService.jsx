import React, { useState } from 'react';
import { Button, Modal, Input, List, Avatar } from 'antd';
import { WechatWorkOutlined, SendOutlined } from '@ant-design/icons';

const CustomerService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Predefined responses for common questions
  const predefinedResponses = {
    'hello': 'Hello! How can I help you today?',
    'hi': 'Hi there! How can I assist you?',
    'price': 'Our prices are competitive and vary by product. Please check the product details for specific pricing.',
    'shipping': 'We offer free shipping for orders over $100. Standard shipping takes 3-5 business days.',
    'return': 'We have a 30-day return policy. Please keep your receipt and original packaging.',
    'payment': 'We accept all major credit cards, PayPal, and bank transfers.',
    'stock': 'Please check the product page for current stock availability.',
    'delivery': 'Delivery typically takes 3-5 business days within the continental US.',
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString(),
    };

    // Generate response
    const lowerInput = inputValue.toLowerCase();
    let response = "I'm sorry, I don't understand. Please try asking about our prices, shipping, returns, payment methods, stock, or delivery.";
    
    // Check for keywords in the input
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }

    // Add bot response
    const botMessage = {
      type: 'bot',
      content: response,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <Button
        type="primary"
        icon={<WechatWorkOutlined style={{ fontSize: 30 }} />}
        size="large"
        onClick={() => setIsVisible(true)}
      >
        Online Consultant
      </Button>

      <Modal
        title="Customer Service"
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={null}
        width={400}
        style={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px' }}>
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={(message) => (
                <List.Item style={{ 
                  justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                  padding: '8px 0'
                }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: message.type === 'user' ? '#1890ff' : '#f0f0f0',
                    color: message.type === 'user' ? 'white' : 'black',
                  }}>
                    <div>{message.content}</div>
                    <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>
                      {message.time}
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              suffix={
                <SendOutlined
                  onClick={handleSend}
                  style={{ cursor: 'pointer' }}
                />
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomerService; 