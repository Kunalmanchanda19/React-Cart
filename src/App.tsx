import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import MainLayout from './Components/Layout/MainLayout';


function App() {
  return (
    <div >
      {/* <MainLayout/> */}
        <Router>
            <AppRoutes/>
       </Router>
    </div>
  );
}

export default App;
