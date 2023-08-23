import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
import { useState } from 'react';


function App() {
  const [sorted, setSorted] = useState(false);
  const handleSort = () => {
    setSorted(!sorted); 
  };

  return (
    <div >
      <div className='container'>
        <div className='logo'>MİNERVAİN</div>
        <div className='Alfabetik' onClick={handleSort}>Alfabetik Sırala</div>
        <div className='logout'>   <Link to={'/CustomerAdd'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}> ADD+</Link></div>

      </div>
      <Routes>

        <Route path='/' element={<Customer sorted={sorted} />} />
        <Route path='/CustomerAdd' element={<AddCustomer />} />


      </Routes>

    </div>
  )
}



export default App;
