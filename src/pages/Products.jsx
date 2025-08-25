import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import converterDolarParaReal from "../utils/cotacao";
import '../styles/ProductCard.css';
import ProductCard from "./ProductCard";

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [precosConvertidos, setPrecosConvertidos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando a pagina...</p>;

  return (
    
  <>

    <h2>Produtos</h2>
    <button onClick={() => navigate(-1)}>Voltar</button>

    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          precoConvertido={precosConvertidos[product.id]}
        />
      ))}
    </div>
);
  </>
  );
} 
