import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { paths } from '../../Routes/paths';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';


const products = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

const Products: React.FC = () => {
  const location = useLocation();

  const isProductsRoot = location.pathname === '/Products';

  return (
    <div>
      {isProductsRoot && (
        <>
                  <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductItem product={product} />
                  </Grid>
                ))}
              </Grid>
          {/* <h1>Products</h1>
          <nav>
            <ul>
              <li><Link to={paths.SHOP}>Shop</Link></li>
            </ul>
          </nav> */}
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Products;
