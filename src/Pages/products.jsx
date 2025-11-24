import Product from "../Components/home/product";
import products from "../data/popularItems";

function Products() {
  return (
    <section className="grid grid-cols-4 gap-4" style={{ width: "70%", margin: "0 auto" }}>
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
