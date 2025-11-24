import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Product({ image, name, size, price }) {
  return (
    <div
      className="
        flex 
        flex-col                    
        border 
        border-gray-100              
        rounded-xl                                
        overflow-hidden              
        cursor-pointer
        transition transform duration-300           
      "
    >
      {/* 1. Image Container */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* 2. Product Details */}
      <div className="p-4 flex flex-col space-y-1">
        <p className="text-lg font-semibold text-gray-800 truncate">
          <Link to={'/products/1'}>{name}</Link>
        </p>

        <p className="text-sm text-gray-500">
          Size: <span className="font-medium text-gray-600">{size}</span>
        </p>
        <span className="text-xl font-bold text-red-600 pt-2">{price}/- </span>
        <button
          style={{ color: "#fe8280" }}
          className="
            mt-4 
            flex 
            items-center 
            justify-center 
            py-2 
            px-4 
            space-x-2 
            text-white 
            font-medium 
            rounded-lg 
            cursor-pointer
            transition duration-150 
            focus:outline-none 
            focus:ring-2 
            focus:ring-red-500 
            focus:ring-opacity-50
          "
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
