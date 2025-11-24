import Menu from "../Components/home/menu";
import Slider from "../Components/home/slider";
import Service from "../Components/home/service";
import { ShoppingBasket, HandCoins, Motorbike, PiggyBank } from "lucide-react";
import PopularItem from "../Components/home/popular-item";
import Product from "../Components/home/product";
import productsData from "../data/popularItems";


function Home() {

  return (
    <section className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section start: Menu & Slider */}
        <section className="flex flex-col lg:flex-row gap-4 pt-4">
          <section className="hidden md:block lg:w-1/4 xl:w-1/6">
            <Menu />
          </section>

          <section className="flex-grow w-full">
            <Slider />
          </section>
        </section>

        {/* --- Service Section --- */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12">
          <Service
            icon={ShoppingBasket}
            text={"+15000 products to shop from"}
          />
          <Service icon={HandCoins} text={"Pay after receiving products"} />
          <Service icon={Motorbike} text={"Get your delivery within 1 hour"} />
          <Service icon={PiggyBank} text={"Get offers that Save Money"} />
        </section>

        {/* --- Popular Categories --- */}
        <section className="mt-12">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Popular Category:
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsData.map((product, index) => (
              <PopularItem
                key={index}
                image={product.image}
                text={product.text}
              />
            ))}
          </div>
        </section>

        {/* --- Best Selling Product / Popular Items --- */}
        <section className="mt-12">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Popular Items:{" "}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

        {/* --- Weekend Deals --- */}
        <section className="mt-12">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Weeken Deals:{" "}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

        {/* --- Happy Hours --- */}
        <section className="mt-12 mb-12">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Happy Hours:
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
      </section>
    </section>
  );
}

export default Home;
