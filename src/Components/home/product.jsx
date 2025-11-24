import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Product({ image, name, size, price }) {
  return (
    <div
      className="
        flex 
        flex-col 
        border 
        border-gray-200          
        rounded-xl 
        overflow-hidden     
        cursor-pointer
        transition duration-300 ease-in-out 
        hover:-translate-y-1     
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
      <div className="p-4 flex flex-col space-y-2 flex-grow">
        {/* Name (Linked) */}
        <p className="text-base font-semibold text-gray-800 truncate leading-tight">
          <Link to={"/products/1"} className="hover:text-indigo-600 transition">
            {name}
          </Link>
        </p>

        {/* Size */}
        <p className="text-sm text-gray-500">
          Size: <span className="font-medium text-gray-700">{size}</span>
        </p>

        {/* Price */}
        <span className="text-xl font-extrabold text-red-400 pt-1">
          {price}/-{" "}
        </span>

        <button
          className="
            mt-3                       
            flex 
            items-center 
            justify-center 
            py-2 
            px-4 
            space-x-2 
            bg-red-400                 
            text-white 
            font-medium 
            rounded-lg 
            shadow-md
            hover:bg-red-400        
            transition duration-150 
            focus:outline-none 
            focus:ring-2 
            focus:ring-red-500 
            focus:ring-opacity-50
            cursor-pointer
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
