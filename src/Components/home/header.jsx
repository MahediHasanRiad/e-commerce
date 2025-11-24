import Icons from "../../utils/icons";
import { Menu } from "lucide-react";
import Input from "../../utils/input";
import image from "../../Image/shwapno.jpg";
import Profile from "./profile";
import AddToCard from "../../Pages/add-to-card";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="
        flex 
        justify-between 
        items-center 
        py-4
        px-8 
      "
      style={{ width: "70%", margin: "0 auto" }}
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
          <Icons icon={Menu} />
        </div>

        <Link to={'/'}>
          <img src={image} alt="Logo" className="w-30 h-20 object-contain" />
        </Link>
      </div>

      <div>
        <Input />
      </div>
      
      {/* profile section  */}
      <div className="flex">
        <AddToCard/>
        <Profile />
      </div>
    </div>
  );
}

export default Header;
