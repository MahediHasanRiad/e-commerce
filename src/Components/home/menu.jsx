import { ChevronRight } from "lucide-react";
import MenuItem from "./menu-item";

function Menu() {
  return (
    <div>
      <MenuItem text={"Women's Care"} icon={ChevronRight} />
      <MenuItem text={"Men's Care"} icon={ChevronRight} />
      <MenuItem text={"Handwash"} icon={ChevronRight} />
      <MenuItem text={"Tissue & Wipes"} icon={ChevronRight} />
      <MenuItem text={"Oral Care"} icon={ChevronRight} />
      <MenuItem text={"Skin Care"} icon={ChevronRight} />
      <MenuItem text={"Talcom Powder"} icon={ChevronRight} />
      <MenuItem text={"Hair Color"} icon={ChevronRight} />
    </div>
  )
}

export default Menu
