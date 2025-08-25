import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  './styles/App.css';
import Login from './pages/login';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';
import NotFound from './pages/NotFound';
import './styles/login.css';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/products');
    }, 2000); // tempo de carregamento simulado
  };

  return (
    <>
      {isLoading ? (
        <div className="login-container">
          <h2>Carregando seu ambiente...</h2>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductsDetails />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
