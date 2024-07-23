import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { Product } from '../../types';
import './ProductItem.css'; // Ensure this CSS file is imported

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="product-card">
      <CardMedia component="img" image={product.image} alt={product.name} className="product-image" />
      <CardContent>
        <Typography variant="h6" className="product-name">{product.name}</Typography>
        <Typography variant="body2" className="product-price">₹{product.price}</Typography>
        <Button variant="outlined" color="primary" className="add-to-cart-btn" sx={{marginTop:2}}onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
