import { X } from "lucide-react";
import AddToCardQuantity from "./controle-quantity"; // Ensure this path is correct

function AddToCardMenu({ image, name, price, quantiry }) {

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
      {/* Product Image and Details */}
      <div className="flex items-center flex-grow">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-base">{name}</span>
          <span className="text-gray-600 text-sm mt-1">৳ {price}/-</span>

          {/* controle card  */}
          <AddToCardQuantity value={quantiry} />
        </div>
      </div>

      <div>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default AddToCardMenu;
