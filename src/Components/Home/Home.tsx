import React from 'react';
import { Button, Typography, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure to create/update this CSS file

const products = [
  { id: 1, name: 'OnePlus Nord CE4 Lite 5G (Super Silver) smart phone', price: 22998, image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/24/full/1719237006-9214.jpeg?im=FeatureCrop,size=(826,465)' },
  { id: 2, name: 'Canon EOS R100 24.1 MP Mirrorless Camera (Black) ', price: 46900, image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043' },
  { id: 3, name: 'Dell inspiron 15 3501 Laptop (8GB + 512GB)', price: 49960, image: 'https://cdn.pixabay.com/photo/2017/08/21/15/37/laptop-2665794_960_720.jpg' },
 
];

const Home: React.FC = () => {
  return (
    <Box className="home-container">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h2" className="hero-title">
          Welcome to ShopEase
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Discover your favorite products at the best prices!
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
          className="hero-button"
        >
          Shop Now
        </Button>
      </Box>

      {/* Product Highlights */}
      <Box className="highlights-section">
        <Typography variant="h4" className="section-title" sx={{marginY:4}}>
          Popular Products
        </Typography>
        <Grid container spacing={4}>
          {products.slice(0, 3).map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper elevation={3} className="highlight-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="highlight-image"
                />
                <Typography variant="h6" className="highlight-name">
                  {product.name}
                </Typography>
                <Typography variant="body1" className="highlight-price">
                  ₹{product.price.toLocaleString()}
                </Typography>
                <Button
                  component={Link}
                  to="/products"
                  variant="contained"
                  color="primary"
                  className="highlight-button"
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Features Section */}
      <Box className="features-section">
        <Typography variant="h4" className="section-title" sx={{marginY:4}}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="feature-title">
              Quality Products
            </Typography>
            <Typography variant="body1">
              We offer high-quality products at competitive prices.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="feature-title">
              Fast Shipping
            </Typography>
            <Typography variant="body1">
              Enjoy quick delivery and hassle-free returns.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className="feature-title">
              Excellent Support
            </Typography>
            <Typography variant="body1">
              Our support team is here to help you 24/7.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
