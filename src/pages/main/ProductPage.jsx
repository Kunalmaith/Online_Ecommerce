import React from 'react';
import ProductDetail from '../../components/shared/ProductDetail'; // Import the new component
import { useParams } from 'react-router-dom';
import { products } from '../../product_data/productData';

// Import the data for the product you want to display


function ProductPage() {
  // In a real application, you would get the product ID from the URL
  // and fetch the corresponding data from an API.
  // For now, we'll just use the imported data directly.
  const {productId} = useParams()

  const productToShow = products.find(product=>product.id===productId)
  if (!productToShow) {
    return <div>Product not found!</div>;
  }


  return (
    <div>
      {/* This is the magic! We are passing the entire product object 
        as a single prop to our reusable component.
      */}
      <ProductDetail product={productToShow} />

      {/* You could add more sections to this page, like "Related Products" */}
    </div>
  );
}

export default ProductPage;