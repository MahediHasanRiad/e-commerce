import ControleQuantity from "../Components/product-details/controle-quantity";
import Description from "../Components/product-details/description";
import SliderImage from "../Components/product-details/slider";

function ProductDetails() {
  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-8 p-8 max-w-7xl mx-auto mt-10 ">
        {/* Image Slider Section */}
        <SliderImage />

        {/* Product Information Section */}
        <section className="md:col-span-3 bg-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Premium Product Title Here
            </h1>
            <p className="text-md text-gray-600 mb-3">Width: 500ml </p>
            <p className="text-md text-gray-600 mb-3">Stock: 10</p>
            <p className="text-xl text-gray-600 mb-3">Price: 99.99 /-</p>
          </div>
          {/* increment / decrement  */}
          <ControleQuantity value={0} />

          {/* Call to action button */}
          <button
            style={{ background: "#fe8280", cursor: "pointer" }}
            className=" w-full hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add to Cart
          </button>
        </section>
      </section>
      {/* Description part */}
      <section>
        <Description />
      </section>
    </section>
  );
}

export default ProductDetails;
