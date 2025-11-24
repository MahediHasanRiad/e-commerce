import Product from "../Components/home/product";
import products from "../data/popularItems";

function Products() {
  return (
    // Replaced inline style with Tailwind classes for responsiveness
    <section
      className="
        max-w-7xl
        mx-auto   
        px-4      
        py-10     
        grid 
        grid-cols-2      
        md:grid-cols-3  
        lg:grid-cols-4   
        xl:grid-cols-5   
        gap-4
      "
    >
      {products.map((item, index) => (
        <Product
          key={index}
          image={item.image}
          name={item.text}
          price={item.price}
          size={item.size}
        />
      ))}
    </section>
  );
}

export default Products;
