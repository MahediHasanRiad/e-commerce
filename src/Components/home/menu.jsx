import { ChevronRight, X } from "lucide-react"; // Import X icon for the close button
import MenuItem from "./menu-item";
import React from "react";

// Accept isOpen and onClose props
function Menu() {
  return (
    <>
      {/* Menu Items List */}
      <div className="space-y-1">
        <MenuItem text={"Women's Care"} icon={ChevronRight} />
        <MenuItem text={"Men's Care"} icon={ChevronRight} />
        <MenuItem text={"Handwash"} icon={ChevronRight} />
        <MenuItem text={"Tissue & Wipes"} icon={ChevronRight} />
        <MenuItem text={"Oral Care"} icon={ChevronRight} />
        <MenuItem text={"Skin Care"} icon={ChevronRight} />
        <MenuItem text={"Talcom Powder"} icon={ChevronRight} />
        <MenuItem text={"Hair Color"} icon={ChevronRight} />
      </div>
    </>
  );
}

export default Menu;
