function ProductCard({ product, precoConvertido }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{precoConvertido || 'Carregando preço...'}</p>
    </div>
  );
}

export default ProductCard;
