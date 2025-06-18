import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddProduct from './pages/AddProduct';



function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<AddProduct />} />
      


        
        <Route path="/add-product" element={<AddProduct />} />
     


      </Routes>
    </Router>
  );
}

export default App;
