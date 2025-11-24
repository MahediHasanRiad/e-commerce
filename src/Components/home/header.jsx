import Icons from "../../utils/icons";
import { Menu, Search } from "lucide-react"; // Import Search icon for mobile menu button
import Input from "../../utils/input";
import image from "../../Image/shwapno.jpg";
import Profile from "./profile";
import AddToCard from "../../Pages/add-to-card";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
      
      <div
        className="
          flex 
          justify-between 
          items-center 
          py-3 
          px-4 sm:px-6 lg:px-8 
          max-w-7xl 
          mx-auto
        "
      >
        {/* Left Section: Menu Icon and Logo */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Menu Icon: Always visible for navigation drawer */}
          <div className="text-gray-700 hover:text-indigo-600 transition cursor-pointer lg:hidden">
            <Icons icon={Menu} />
          </div>

          {/* Logo */}
          <Link to={'/'} className="flex-shrink-0">
            <img src={image} alt="Logo" className="h-10 sm:h-12 w-auto object-contain" /> 
          </Link>
        </div>

        {/* Center Section: Search Bar (Hidden on mobile) */}
        <div className="hidden lg:block lg:flex-grow lg:max-w-xl xl:max-w-2xl mx-6">
          <Input />
        </div>
        
        {/* Right Section: Profile and Cart */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          
          {/* Mobile Search Icon (visible only on small screens) */}
          <div className="lg:hidden text-gray-700 hover:text-indigo-600 transition cursor-pointer">
             <Icons icon={Search} />
          </div>

          {/* Cart Component */}
          <AddToCard/> 
          
          {/* Profile Component */}
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;