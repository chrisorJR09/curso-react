import { useState } from "react";
import './NavItem.css';
import './Dropdown.css';
import { Icon } from "./icon";
export function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Nav-Item Dropdown" onClick={() => setOpen((open) => !open)}>
      <Icon icono={'menu'}></Icon>
      Más
      {open ? <div className="Nav-Menu">Desplegable</div> : null}
    </div>
  );
}
