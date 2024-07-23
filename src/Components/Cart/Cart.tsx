import React, { useContext, useState } from 'react';
import { List, Typography, Button, Paper, Divider, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css'; // Ensure this CSS file is updated if needed
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Cart: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false); // State to manage modal visibility

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Create a list of product details for the order summary
  const productList = cartItems.map(item => (
    <Typography key={item.product.id}>
      {item.product.name} - ₹{item.product.price} x {item.quantity}
    </Typography>
  ));

  const handleCheckout = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false); 
  };

  const handleOrder = () => {
    setOpen(false); 
    clearCart();
  };

  return (
    <Box className="cart-container" sx={{ padding: 3, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" className="cart-title" sx={{ marginY: 5, textAlign: 'center' }}>
        Shopping Cart
      </Typography>
      <Paper elevation={3} className="cart-paper" sx={{ padding: 3 }}>
        <List>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <React.Fragment key={item.product.id}>
                <CartItem item={item} />
                <Divider />
              </React.Fragment>
            ))
          ) : (
            <Typography variant="h6" align="center">
              Your cart is empty
            </Typography>
          )}
        </List>
        <Typography variant="h5" className="cart-total" sx={{ marginY: 3, textAlign: 'right' }}>
          Total: ₹{totalPrice.toFixed(2)}
        </Typography>
        {cartItems.length > 0 && (
          <Button 
            variant="contained" 
            color="primary" 
            className="checkout-btn" 
            sx={{ display: 'block', width: '100%' }} 
            onClick={handleCheckout}
          >
            Checkout  <ArrowForwardIcon sx={{marginRight:2}}/>
          </Button>
        )}
      </Paper>

      {/* Order Summary Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Summary</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Thank you for your purchase!</Typography>
          <Typography variant="body1">Your order has been placed successfully.</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>Total Amount: ₹{totalPrice.toFixed(2)}</Typography>
          <Typography variant="body1">Total Quantity: {totalQuantity}</Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6">Products:</Typography>
            {productList}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
          <Button onClick={handleOrder} color="primary">
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cart;
