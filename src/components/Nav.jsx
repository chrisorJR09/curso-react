import { useState } from "react";
import { NavItem } from "./NavItem";
import { Dropdown } from "./Dropdown";
import "./Nav.css";

export function Nav() {
  const [menu, setMenu] = useState([
    { nombre: "Inicio", icono: "mdi-home" },
    { nombre: "Buscar", icono: "" },
    { nombre: "Explorar", icono: "" },
    { nombre: "Buscar", icono: "" },
    { nombre: "Reels", icono: "" },
    { nombre: "Mensajes", icono: "" },
    { nombre: "Notificaiones", icono: "" },
    { nombre: "Crear", icono: "" },
    { nombre: "Perfil", icono: "" },
  ]);

  return (
    <div className="Nav">
      Navigation
      {menu.map((elemento, i) => (
        <NavItem nombre={elemento.nombre} key={i}></NavItem>
      ))}
      <Dropdown></Dropdown>
    </div>
  );
}
