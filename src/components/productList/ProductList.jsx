import ProductCard from "../productCard/ProductCard";

function ProductsList ({ products }) {
    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={product}
            name={product.name}
            price={product.price}
            brands={product.brands}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    );
  };
  
  export default ProductsList;