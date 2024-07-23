import React, { useState } from 'react';
import { Grid, TextField, Box } from '@mui/material';
import ProductItem from './ProductItem';
import './ProductList.css'; // Ensure this CSS file is imported

const products = [
  { id: 1, name: 'OnePlus Nord CE4 Lite 5G (Super Silver) smart phone', price: 22998, image: 'https://media.licdn.com/dms/image/C5112AQHIEn-6EbUClA/article-inline_image-shrink_400_744/0/1564201749491?e=1727308800&v=beta&t=k1Y-7LG_7hwawJjErei5hk_5VNnyKRUFHW6ouDr_QrY' },
  { id: 2, name: 'Canon EOS R100 24.1 MP Mirrorless Camera (Black) ', price: 46900, image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043' },
  { id: 3, name: 'Sonex Trending watch for women', price: 1999, image: 'https://mapsystemsindia.com/images/blog/a-white-background-makes-your-product-stand-out.webp' },
  { id: 4, name: 'Bourge Trending Shoes for men', price: 1499, image: 'https://img.pixelz.com/blog/photograph-white-products-on-white-backgrounds-ecommerce/white-product-w-bg-banner.jpg?w=1000' },
  { id: 5, name: 'Dell inspiron 15 3501 Laptop (8GB + 512GB)', price: 49960, image: 'https://cdn.pixabay.com/photo/2017/08/21/15/37/laptop-2665794_960_720.jpg' },
  { id: 6, name: 'Boat earbuds immotral 720z with Anc', price: 2900, image: 'https://media.cnn.com/api/v1/images/stellar/prod/210312133423-best-wfh-headphones-airpods-pro.jpg?q=w_2432,h_1368,x_0,y_0,c_fill' },
  { id: 7, name: 'Samsung smart TV 32 inches with Alexa', price: 33000, image: 'https://img.pikbest.com/wp/202405/led-tv-3d-model-of-with-white-background-isolation_9826952.jpg!w700wp' },
  { id: 8, name: 'Sony play station 5 gaming console ', price: 51200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF2vhVRARiIMO_UWsClZlz7o4dlZ46E5AyzcLO2PUcPeQMIOZOz9FOW9RmvQWmm1edfE&usqp=CAU' },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box className="search-container">
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />
      </Box>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
