import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { paths } from '../../Routes/paths';

const Products: React.FC = () => {
  const location = useLocation();

  const isProductsRoot = location.pathname === '/Products';

  return (
    <div>
      {isProductsRoot && (
        <>
          <h1>Products</h1>
          <nav>
            <ul>
              <li><Link to={paths.SHOP}>Shop</Link></li>
            </ul>
          </nav>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Products;
