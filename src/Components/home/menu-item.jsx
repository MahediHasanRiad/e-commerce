import MenuIcon from "../../utils/menu-icon";
import { Link } from "react-router-dom";

function MenuItem({ text, icon }) {
  return (
    <Link to={"/products"}>
      <div
        className="
        flex 
        items-center         
        justify-between     
        px-3                 
        text-gray-700       
        cursor-pointer
        rounded-lg          
        transition-colors duration-150 
        items-center 
        hover:bg-gray-100    
        hover:text-gray-900  
      "
      >
        <div className="text-base font-medium">
          <span className="text-sm">{text}</span>
        </div>

        <div className="text-xl">
          <MenuIcon icon={icon} />
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
