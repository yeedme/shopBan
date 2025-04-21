import React from 'react';
    //补充缺失的代码
    import { Modal, Button, List } from 'antd';
    import { ShoppingCartOutlined } from '@ant-design/icons';
   


const Outside = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const submitsucessful=()=>{
        messageApi.success('Order placed successfully');
    }

    return (
        //这里需要一个购物车组件
        <div>
            {/**外部 */}
        <Modal
        title={selectedProduct?.name}
        open={isModalVisible}
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
                <p className="text-gray-500">Stock: {selectedProduct.stock}</p>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  加入购物车
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <p>{selectedProduct.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Product Reviews</h3>
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

        </div>
    );
}

export default Outside;
