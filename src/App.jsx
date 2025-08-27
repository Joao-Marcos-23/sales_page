import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  './styles/App.css';
import Login from './components/login';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import NotFound from './components/NotFound';
import './styles/login.css';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/products');
    }, 1000); // tempo de carregamento simulado
  };

  return (

    <>
       
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductsDetails />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
