import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserPen } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="m-2">
      <span
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <UserPen
          size={40}
          color="#868282ff"
          className="
            cursor-pointer 
            mx-2 
            border 
            border-gray-300 
            rounded-full 
            p-1 
            shadow-sm 
            hover:shadow-md 
            transition-all 
            duration-200 
            ease-in-out
          "
        />
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <Link to={"/user/profile"}>
          <MenuItem
            onClick={handleClose}
            sx={{ width: "70%", margin: "0 auto" }}
          >
            Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
