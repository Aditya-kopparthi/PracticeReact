import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { name: 'Laptop', price: 49999 },
    { name: 'Phone', price: 19999 },
    { name: 'Headphones', price: 2999 }
  ];

  return (
    <div>
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}

export default ProductList;