const productsData = [
    {
      id: 1,
      name: 'CHANNEL Luxurious Essence Foundation',
      price: 450,
      stock: 50,
      image: 'https://www.chanel.cn/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/sublimage-le-teint-ultimate-radiance-generating-cream-foundation-12-beige-rose-1oz--packshot-default-146610-9564478832670.jpg',
      description: '30 g',
      comments: [
        {
          author: '张三',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '非常好用，拍照效果很棒！',
          datetime: '2024-03-15 12:00:00',
        },
        {
          author: '李四',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '电池续航很给力，推荐购买！',
          datetime: '2024-03-14 15:30:00',
        },
      ],
    },
    {
      id: 2,
      name: 'CHANNEL Luxury Essence Spray (Upgraded)',
      price: 411,
      stock: 300,
      image: 'https://www.chanel.cn/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/sublimage-la-brume-intense-revitalizing-mist-4x0-6fl-oz--packshot-default-141170-9564917727262.jpg',
      description: '4x18 ml',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 3,
      name: 'FILA Men Casual Hoodie',
      price: 210,
      stock: 300,
      image: 'https://img.fishfay.com/shopgoods/7/F11M518209F/ZT-F11M518209F/02339d6314443f964c31c9cfc47be4c7.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 4,
      name: 'FILA Woman Casual Hoodie',
      price: 322,
      stock: 300,
      image: 'https://img.fishfay.com/shopgoods/7/F11W514205F/ZT-F11W514205F/3623b5f89f1d52c8648df5337eb4cbf3.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 6,
      name: 'FILA Man Shoe',
      price: 371,
      stock: 300,
      image: 'https://img.fishfay.com/shopgoods/7/A12W521705F/ZT-A12W521705F/e75d94471b572aba8af301c810a4b970.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 7,
      name: 'FILA Woman Sport Shoe',
      price: 1290,
      stock: 300,
      image: 'https://img.fishfay.com/shopgoods/7/T12W513209F/zt-T12W513209F/6f2ae963910f229a8b869fcd7f9dfedc.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 8,
      name: 'INSTAX min99',
      price: 130,
      stock: 300,
      image: 'https://asset.fujifilm.com.cn/www/cn/files/2024-03/4897c98f0511abe8a12a0454ea2f2e33/thumb_mini99_01.png',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    // {
    //   id: 9,
    //   name: 'SEL16F18G',
    //   price: 90000,
    //   stock: 300,
    //   image: 'https://store.sony.com.tw/resource/file/product_files/SEL16F18G/01_d02134505.jpg',
    //   description: ' ',
    //   comments: [
    //     {
    //       author: '王五',
    //       avatar: 'https://joeschmoe.io/api/v1/random',
    //       content: '性能强大，屏幕显示效果很好！',
    //       datetime: '2024-03-13 10:20:00',
    //     },
    //   ],
    // },
    {
      id: 10,
      name: 'GUCCI GG Emblem',
      price: 2000,
      stock: 10,
      image: 'https://res-cms.gucci.cn/public-images/prod/resources/815118FAD6L8458/815118FAD6L8458_White_Center_0_0_800x800_1.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    {
      id: 11,
      name: 'GUCCI PO ',
      price: 3100,
      stock: 300,
      image: 'https://res-cms.gucci.cn/public-images/prod/resources/837466AAEAO3332/837466AAEAO3332_White_Center_0_0_800x800_1.jpg',
      description: ' ',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    // Add more products as needed
  ];
//模拟一些
  const urlData=[
    {
      id: 1,
      name: 'Chanels Luxurious Essence ',
      price: 2130,
      stock: 0,
      
      image: 'https://www.chanel.cn/puls-img/c_limit,w_2400/q_auto:good,f_auto,dpr_1.1/1736867450196-corerangecoverdesktopjpg_2520x5760.jpg',
      description: 'Chanels Luxurious Essence Conditioning Lotion Reference number 144270',
      comments: [
        {
          author: '张三',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '非常好用，拍照效果很棒！',
          datetime: '2024-03-15 12:00:00',
        },
        {
          author: '李四',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '电池续航很给力，推荐购买！',
          datetime: '2024-03-14 15:30:00',
        },
      ],
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: 12999,
      stock: 30,
      image: 'https://picsum.photos/300/200?random=2',
      description: 'Professional laptop for creative work.',
      comments: [
        {
          author: '王五',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: '性能强大，屏幕显示效果很好！',
          datetime: '2024-03-13 10:20:00',
        },
      ],
    },
    // Add more products as needed
  ];

export {urlData,productsData}