import React, { useState } from 'react';
import { Button, Modal, Input, List, Avatar } from 'antd';
import { WechatWorkOutlined, SendOutlined } from '@ant-design/icons';

const CustomerService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Predefined responses for common questions
  const predefinedResponses = {
    'Which courier service is used': 'International shipping is arranged by the platform. For domestic delivery, we use ZTO or STO by default. SF Express is available upon request with an additional fee.',
    'Track the customs clearance progress': 'Customs clearance requires uploading your ID card (click to upload). It will be processed by the local customs, and typically takes 3–5 business days (subject to actual clearance time).',
    'Check the shipping time': 'Shipping times are affected by various factors. The delivery time shown on the order page reflects the estimated timeframe under normal conditions. If there is a significant delay in the shipment, please contact customer service for further assistance.',
    // 'shipping': 'We offer free shipping for orders over $100. Standard shipping takes 3-5 business days.',
    // 'return': 'We have a 30-day return policy. Please keep your receipt and original packaging.',
    // 'payment': 'We accept all major credit cards, PayPal, and bank transfers.',
    // 'stock': 'Please check the product page for current stock availability.',
    // 'delivery': 'Delivery typically takes 3-5 business days within the continental US.',
  };

  const quickQuestions = [
    'Which courier service is used',
    'Track the customs clearance progress',
    'Check the shipping time'
  ];

  const handleQuickInput = (question) => {
    setInputValue(question);
    handleSend(question);
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: text,
      time: new Date().toLocaleTimeString(),
    };

    // Generate response
    const lowerInput = text.toLowerCase();
    let response = "I'm sorry, I don't understand. Please try asking about our prices, shipping, returns, payment methods, stock, or delivery.";
    
    // Check for keywords in the input
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key.toLowerCase())) {
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
        width={700}
        // style={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <div style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {quickQuestions.map((question, index) => (
                <Button 
                  key={index}
                  onClick={() => handleQuickInput(question)}
                  type="default"
                >
                  {question}
                </Button>
              ))}
            </div>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              suffix={
                <SendOutlined
                  onClick={() => handleSend()}
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