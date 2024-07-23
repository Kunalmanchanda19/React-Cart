import React, { useContext } from 'react';
import { ListItem, ListItemText, IconButton, Input, Box, Typography } from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';
import './CartItem.css'; // Ensure you import the CSS for additional styling

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (value: number) => {
    updateQuantity(item.product, value);
  };

  return (
    <ListItem className="cart-item">
      <Box className="product-image-container">
        <img src={item.product.image} alt={item.product.name} className="product-image" />
      </Box>
      <Box className="item-details">
        <Box className="item-info">
          <Typography variant="body1" className="item-name">{item.product.name}</Typography>
          <Typography variant="body2" className="item-price">₹{item.product.price}</Typography>
        </Box>
        <Box className="quantity-controls">
          <IconButton 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="quantity-button"
          >
            <Remove />
          </IconButton>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            inputProps={{ min: 1 }}
            className="quantity-input"
          />
          <IconButton 
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="quantity-button"
          >
            <Add />
          </IconButton>
        </Box>
      </Box>
      <IconButton edge="end" onClick={() => removeFromCart(item.product)}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
