import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import converterDolarParaReal from "../utils/cotacao";
import '../styles/ProductCard.css';
import ProductCard from "./ProductCard";


export default function Products() {
const navigate = useNavigate();


  const [products, setProducts] = useState([]);
  const [precosConvertidos, setPrecosConvertidos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [setCart,Cart] = useState([]);
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(async (data) => {
        setProducts(data);

        const precos = await Promise.all(
          data.map(prod => converterDolarParaReal(prod.price))
        );

        const precosMap = data.reduce((acc, prod, i) => {
          acc[prod.id] = precos[i];
          return acc;
        }, {});

        setPrecosConvertidos(precosMap);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
      });
  }, []);

  if (isLoading) return (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Carregando a página...</p>
  </div>
);

const addToCart = (product) => {
    setCart([Cart, product])
}

return (
  <>
<div> 
  <div className="product-grid">
      {products.map(product => (
        
          <ProductCard 
            product={product}
            precoConvertido={precosConvertidos[product.id]}
          />
          

      ))}
    </div>
  </div>
    



  </>
)





};




