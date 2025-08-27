import React from "react";
import '../styles/ProductCard.css';
export default function ProductCard({ product, precoConvertido }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title}  />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">R$ {precoConvertido}</p>
        <button className="product-button">Comprar</button>
      </div>
    </div>
  );
}
