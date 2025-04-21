import React, { useState, useEffect } from 'react';
import { Card, Modal, Button, Rate, Avatar, List, message, Badge, Input, Tag } from 'antd';
import { ShoppingCartOutlined, EyeOutlined, SearchOutlined, WechatWorkOutlined } from '@ant-design/icons';
import ShoppingCart from '../../components/ShoppingCart';

 import { productsData as products,urlData } from './shopData';

const ShopCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isUrlModalVisible, setIsUrlModalVisible] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [messageApi, contextHolder] = message.useMessage();
  const submitsucessful=()=>{
    messageApi.success('buy successful');
  }
  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddToCart = (product) => {
    // Check if product stock is 0
 

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If item already exists in cart, increase quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      }
      // If new item, add to cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
    message.success('add to cart');
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    message.success('move to cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter products when search term changes
  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleUrlSubmit = () => {
    if(urlInput === "https://www.chanel.cn/cn/skincare/sublimage/the-skincare-ritual/") {
      const urLproduct = urlData[0];
      if (urLproduct) {
        setSelectedProduct(urLproduct);
        setIsModalVisible(true);
        setIsUrlModalVisible(false);
        setUrlInput('');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {contextHolder}
      <div className="fixed bottom-4 left-4 z-50">
        
          <Button
            type="primary"
          
            icon={<WechatWorkOutlined  style={{fontSize:30}}/>}
            size="large"
            // onClick={() => setIsCartVisible(true)}
          >
            online consultant
            </Button>
      
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <Badge count={cartItems.reduce((sum, item) => sum + item.quantity, 0)}>
          <Button
            type="primary"
            shape="circle"
            icon={<ShoppingCartOutlined style={{fontSize:30}}/>}
            size="large"
            onClick={() => setIsCartVisible(true)}
          />
        </Badge>
      </div>

      <div className="w-full flex items-center mb-6 justify-between">
        <Input
          placeholder="Search products"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={handleSearch}
          style={{ maxWidth: '300px' }}
          allowClear
        />
        <Button type='primary' onClick={() => setIsUrlModalVisible(true)}>Purchase by URL</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <img
                alt={product.name}
                src={product.image}
                className="h-48 object-cover cursor-pointer"
                onClick={() => showModal(product)}
              />
            }
            actions={[
              <EyeOutlined key="view" onClick={() => showModal(product)} />,
              <ShoppingCartOutlined key="cart" onClick={() => handleAddToCart(product)} />,
            ]}
          >
            <Card.Meta
              title={product.name}
              description={
                <div>
                  <p className="text-red-500 font-bold">¥{product.price}</p>
                  <p className="text-gray-500">Stock: 
                  <Tag color={product.stock > 50 ? 'success' : 'error'}>
                    {product.stock > 50 ? 'Sufficient' : 'Low Stock'}
                  </Tag>
                </p>
                </div>
              }
            />
          </Card>
        ))}
      </div>

      <Modal
        title={selectedProduct?.name}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedProduct && (
          <div className="space-y-6">
            <div className="flex gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-1/2 h-64 object-cover"
              />
              <div className="w-1/2 space-y-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <p className="text-red-500 text-xl font-bold">¥{selectedProduct.price}</p>
                {selectedProduct.stock===0?null:

                  <p className="text-gray-500">Stock: 
                  <Tag color={selectedProduct.stock > 50 ? 'success' : 'error'}>
                    {selectedProduct.stock > 50 ? 'Sufficient' : 'Low Stock'}
                  </Tag>
                </p>
                }
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <p>{selectedProduct.description}</p>
            </div>

            <div className="mt-8 " hidden>
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <List
                className="comment-list"
                header={`${selectedProduct.comments.length} Comments`}
                itemLayout="horizontal"
                dataSource={selectedProduct.comments}
                renderItem={(item) => (
                  <li>
                    {/* <Comment
                      author={item.author}
                      avatar={<Avatar src={item.avatar} alt={item.author} />}
                      content={item.content}
                      datetime={item.datetime}
                    /> */}
                  </li>
                )}
              />
            </div>
          </div>
        )}
      </Modal>

      <ShoppingCart
        visible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        setIsCartVisible={setIsCartVisible}
        submitsucessful={submitsucessful}
      />
      {/** 这个modal里会有一个输入框和确认按钮，当输入对应url，会自动打开商品详情页（会根据这个url去匹配对应的商品数据，这些数据都是模拟数据，不需要提高接口去实现，）*/}
      
      <Modal
        title="Purchase by URL"
        open={isUrlModalVisible}
        onCancel={() => {
          setIsUrlModalVisible(false);
          setUrlInput('');
        }}
        footer={[
          <Button key="cancel" onClick={() => {
            setIsUrlModalVisible(false);
            setUrlInput('');
          }}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUrlSubmit}>
            Confirm
          </Button>
        ]}
      >
        <Input
          placeholder="Enter product URL (e.g.: /product/1)"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default ShopCard;
