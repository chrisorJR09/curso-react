import "./NavItem.css";
import { Icon } from "./icon";

export function NavItem(props) {
  return <div className="Nav-Item">
    <Icon icono={props.icono}></Icon>
    {props.nombre}
    </div>;
}
