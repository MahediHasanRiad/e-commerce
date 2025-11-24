import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button"; // Example icon
import AddToCardButton from "../Components/add-to-card/add-to-card-Icon"; // Assuming this is your custom component
import AddToCardMenu from "../Components/add-to-card/menu-item";

import image from "../Image/category/handwash.webp";
import OrderButton from "../utils/order-btn";

function AddToCard() {
  const [open, setOpen] = React.useState(false); // Simplified state to a single boolean

  const toggleDrawer = (newOpen) => (event) => {
    setOpen(newOpen);
  };

  const anchor = "right";

  return (
    <>
      {/* Button to open the drawer */}
      <Button onClick={toggleDrawer(true)}>
        <AddToCardButton />
      </Button>

      {/* The Drawer component */}
      <Drawer
        anchor={anchor} // Always 'right'
        open={open} // Controlled by the 'open' state
        onClose={toggleDrawer(false)} // Closes when clicking outside or pressing Escape
        sx={{ justifyContent: "space-between" }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* card items */}
          <AddToCardMenu
            image={image}
            name={"women care"}
            price={250}
            quantiry={5}
          />
          <AddToCardMenu
            image={image}
            name={"women care"}
            price={250}
            quantiry={5}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: '15px' }}>
          <Box>
            <span>Total: </span>
          </Box>
          <Box>
            <span>2500/-</span>
          </Box>
        </Box>
        <Box>
          {/* order button  */}
          <OrderButton text={'Place Order'} />
        </Box>
      </Drawer>
    </>
  );
}

export default AddToCard;
