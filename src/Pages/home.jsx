import Menu from "../Components/home/menu";
import Slider from "../Components/home/slider";
import Service from "../Components/home/service";
import { ShoppingBasket, HandCoins, Motorbike, PiggyBank } from "lucide-react";
import PopularItem from "../Components/home/popular-item";
import Product from "../Components/home/product";
import productsData from "../data/popularItems";

function Home() {
  return (
    <section>
      {/* Top section start */}
      <section className="w-11/12 max-w-7xl mx-auto rounded-lg">
        <section className="flex">
          <section className="w-1/6">
            <Menu />
          </section>
          <section className="flex-grow">
            <Slider />
          </section>
        </section>

        {/* Top section end */}

        {/* service section start */}
        <section className="grid grid-cols-4 gap-4 mt-12">
          <Service
            icon={ShoppingBasket}
            text={"+15000 products to shop from"}
          />
          <Service icon={HandCoins} text={"Pay after receiving products"} />
          <Service icon={Motorbike} text={"Get your delivery within 1 hour"} />
          <Service icon={PiggyBank} text={"Get offers that Save Money"} />
        </section>
        {/* service section end */}

        {/* Popular Categories start  */}
        <section>
          <h1 className="my-8 text-2xl">Popular Category:</h1>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {productsData.map((product, index) => (
              <PopularItem
                key={index}
                image={product.image}
                text={product.text}
              />
            ))}
          </div>
        </section>
        {/* Popular Categories end  */}

        {/* best selling product start  */}
        <section>
          <h1 className="my-8 text-2xl">Popular Items: </h1>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {productsData.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.text}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        </section>
        {/* best selling product end */}

        {/* weekend deals start */}
        <section>
          <h1 className="my-8 text-2xl">Weeken Deals: </h1>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {productsData.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.text}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        </section>
        {/* weekend deals end */}

        {/* happy hours start */}
        <section>
          <h1 className="my-8 text-2xl">Happy Hours: </h1>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {productsData.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.text}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        </section>
        {/* happy hours end */}
      </section>
    </section>
  );
}

export default Home;
