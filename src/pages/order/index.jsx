import React, { useState } from 'react';
import { Table, DatePicker, Input, Select, Space, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Option } = Select;

// Mock data for orders
const mockOrders = [
  {
    id: 'ORD001',
    orderDate: '2024-03-15',
    productName: 'Chanels Luxurious Essence Foundation',
    price: 1400,
    quantity: 1,
    totalAmount: 1400,
    shippingStatus: 'shipped',
    trackingNumber: 'SF1234567890',
  },
  {
    id: 'ORD002',
    orderDate: '2024-03-14',
    productName: 'Chanel Luxury Essence Spray',
    price: 2265,
    quantity: 1,
    totalAmount: 2265,
    shippingStatus: 'notShipped',
    trackingNumber: '-',
  },
  {
    id: 'ORD003',
    orderDate: '2024-03-13',
    productName: 'SONY α1 II',
    price: 3000,
    quantity: 2,
    totalAmount: 6000,
    shippingStatus: 'delivered',
    trackingNumber: 'SF0987654321',
  },
];

const Order = () => {
  const [dateRange, setDateRange] = useState(null);
  const [productName, setProductName] = useState('');
  const [shippingStatus, setShippingStatus] = useState('all');

  const columns = [
    {
      title: 'order',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'orderDate',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'productName',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'totalAmount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (totalAmount) => `$${totalAmount}`,
    },
    {
      title: 'shippingStatus',
      dataIndex: 'shippingStatus',
      key: 'shippingStatus',
    },
    {
      title: 'trackingNumber',
      dataIndex: 'trackingNumber',
      key: 'trackingNumber',
    },
  ];

  const filteredOrders = mockOrders.filter(order => {
    const matchesDate = !dateRange || (
      dayjs(order.orderDate).isAfter(dateRange[0]) &&
      dayjs(order.orderDate).isBefore(dateRange[1])
    );
    const matchesProduct = !productName || 
      order.productName.toLowerCase().includes(productName.toLowerCase());
    const matchesStatus = shippingStatus === 'all' || 
      order.shippingStatus === shippingStatus;

    return matchesDate && matchesProduct && matchesStatus;
  });

  return (
    <div className="p-6 w-full">
      <Card title="Order Query" className="mb-6">
        <Space direction="vertical" size="large" className="w-full">
          <Space>
            <RangePicker
              value={dateRange}
              onChange={setDateRange}
              placeholder={['beginData', 'endDate']}
            />
            <Input
              placeholder="ProductName"
              prefix={<SearchOutlined />}
              value={productName}
              onChange={e => setProductName(e.target.value)}
              style={{ width: 200 }}
            />
            <Select
              value={shippingStatus}
              onChange={setShippingStatus}
              style={{ width: 120 }}
            >
              <Option value="all">all</Option>
              <Option value="notShipped">not shipped</Option>
              <Option value="shipped">shipped</Option>
              <Option value="delivered">delivered</Option>
            </Select>
          </Space>
        </Space>
      </Card>

      <Table
        columns={columns}
        dataSource={filteredOrders}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
};

export default Order;
