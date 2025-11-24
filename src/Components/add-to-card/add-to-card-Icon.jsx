import Badge from "@mui/material/Badge";
import { ShoppingBasket } from "lucide-react";

function AddToCardButton() {
  return (
    <div className="relative m-2">
        <Badge
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": { 
              backgroundColor: "#fe8280", 
              color: "white",
              fontSize: "0.75rem",
              height: "20px",
              minWidth: "20px",
              borderRadius: "50%",
              padding: "0 6px",
            },
          }}
        >
          <ShoppingBasket
            size={35}
            color="#868282ff"
            className="
              cursor-pointer
              transition-all
              duration-200
              ease-in-out
            "
          />
        </Badge>
    </div>
  )
}

export default AddToCardButton
