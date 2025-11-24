import { Link } from "react-router-dom";

function OrderButton({ text }) {
  return (
    <Link to={"/checkout"}>
      <div>
        <button
          className="
              bg-[#fe8280]      
              hover:bg-red-600      
              text-white           
              font-bold            
              py-2                 
              px-4               
              rounded-lg           
              shadow-md            
              hover:shadow-lg       
              transition-all        
              duration-200          
              ease-in-out        
              w-full              
              text-lg              
  "
        >
          {text}
        </button>
      </div>
    </Link>
  );
}

export default OrderButton;
